import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  limit,
  orderBy,
  query,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPFHnutWJg_oDDKR9DyDPzEm-DXWdhmxo",
  authDomain: "screencompare.firebaseapp.com",
  databaseURL: "https://screencompare-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "screencompare",
  storageBucket: "screencompare.appspot.com",
  messagingSenderId: "1080235317181",
  appId: "1:1080235317181:web:1a2d8a776d69b3787064d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// reCAPTCHA v3
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfaM8cmAAAAAHCYzmLi9C0NYRUXt46rphpZYWRq"),

  // Automatically refresh the token
  isTokenAutoRefreshEnabled: true,
});

// Initialize Firestore
const db = getFirestore();

// Authenticate anonymously
const auth = getAuth();

/**
 * Adds a new form response to the Firestore database.
 * @param {number} screenSize - The screen size of the form response.
 * @param {number} xAspectRatio - The X aspect ratio of the form response.
 * @param {number} yAspectRatio - The Y aspect ratio of the form response.
 * @returns {Promise<void>} - A Promise that resolves when the form response has been added to the database.
 */
const addToDatabase = async (screenSize, xAspectRatio, yAspectRatio) => {
  if (!navigator.onLine) {
    console.log("addToDatabase - No internet connection.");
    return; // Terminate the function if there's no connection
  }

  // Initialize a batch
  const batch = writeBatch(db);

  // Generate a unique ID based on the form response
  const formResponseId = `${screenSize}_${xAspectRatio}_${yAspectRatio}`;
  const formResponseRef = doc(db, "formResponses", formResponseId);

  // Get the current document
  const formResponseDoc = await getDoc(formResponseRef);

  if (formResponseDoc.exists()) {
    // If the document exists, increment the count
    batch.update(formResponseRef, {
      count: increment(1),
    });
  } else {
    // If the document does not exist, create it with a count of 1
    batch.set(formResponseRef, {
      screenSize,
      xAspectRatio,
      yAspectRatio,
      count: 1,
    });
  }

  // Commit the batch
  await batch.commit();
};

/**
 * Retrieves the top 5 form responses from the Firestore database and updates the UI.
 * @returns {Promise<void>} - A Promise that resolves when the top 5 form responses have been retrieved and the UI has been updated.
 */
const getTopScreens = async () => {
  if (!navigator.onLine) {
    console.log("getTopScreens - No internet connection.");
    return; // Terminate the function if there's no connection
  }

  // Query for the top 5 form responses
  const formResponsesQuery = query(
    collection(db, "formResponses"),
    orderBy("count", "desc"),
    limit(5)
  );

  try {
    const querySnapshot = await getDocs(formResponsesQuery);
    const spanItems = document.querySelectorAll(
      ".common-screens-dialog__column:first-child li span"
    );

    // Create an array of the querySnapshot documents
    const docs = querySnapshot.docs;

    // Iterate over each spanItem
    spanItems.forEach((span, i) => {
      // Check if the document exists
      if (docs[i]) {
        const doc = docs[i];

        // Create new text node for screen size
        const screenSize = document.createTextNode(doc.data().screenSize + "'");

        // Create new text node for aspect ratio
        const aspectRatio = document.createTextNode(
          `${doc.data().xAspectRatio}:${doc.data().yAspectRatio}`
        );

        // Create new pre element for tab
        const tabPre = document.createElement("pre");
        tabPre.textContent = "\t ";

        // Clear the span of its original children
        while (span.firstChild) {
          span.firstChild.remove();
        }

        // Append new nodes to the span
        span.appendChild(screenSize);
        span.appendChild(tabPre);
        span.appendChild(aspectRatio);
      }
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
};

signInAnonymously(auth)
  .then(() => {
    getTopScreens();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error code: ${errorCode}, message: ${errorMessage}`);
  });

export { addToDatabase, getTopScreens };
