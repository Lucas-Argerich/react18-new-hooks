import { useMemo, useDeferredValue } from "react";

export default function List({ input }) {
  const LIST_SIZE = 10000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  return list;
}
