# Firebase Snapshot Data Race Condition

This repository demonstrates a common issue when working with Firebase's `onSnapshot` listener: accessing document properties before the data has fully loaded.  This can lead to unexpected `undefined` values or errors.  The example illustrates the problem and provides a solution using promises or async/await.

## Problem

The `onSnapshot` listener provides real-time updates, but there's a timing issue if you try to access the document's data immediately without waiting for the data to populate.  This results in the data being `undefined`.