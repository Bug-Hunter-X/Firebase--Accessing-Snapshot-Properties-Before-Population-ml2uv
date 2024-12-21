To solve this issue, ensure that you access the document's properties only within the `onSnapshot` callback after the data is populated.  Here's how you can do it using async/await for better readability:

```javascript
import { doc, onSnapshot } from "firebase/firestore";

async function getData(docRef) {
  return new Promise((resolve, reject) => {
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.data());
      } else {
        reject("Document does not exist");
      }
    }, (error) => {
      reject(error);
    });
  });
}

async function main() {
  const docRef = doc(db, "collection", "docId");
  try {
    const data = await getData(docRef);
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
main();
```

This revised code waits for the promise to resolve before accessing the data.  This ensures that the data is available before your code attempts to use it.