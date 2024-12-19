import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // This effect sets up an event listener to detect the "Escape" key press.
      // Every time a new `onCloseMovie` function is passed in, this effect runs again,
      // creating a new event listener and removing the previous one in the cleanup function.
      // The cleanup function is necessary to prevent memory leaks by removing
      // the old event listener whenever the effect re-runs.
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
