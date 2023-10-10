import { v4 as uuid } from "uuid";

export const Collection = (title = "default Collection", _id = uuid()) => {
  let stuff = [];
  let observers = {};

  const add = (item, _id = uuid()) => {
    const thing = Object.freeze({ _id, data: item });
    stuff = [...stuff, thing];
    observers.add?.forEach((observerFunc) =>
      observerFunc(thing, { _id, title, collection: [...stuff] }),
    );
    console.table(stuff);
    return thing;
  };

  const remove = (id) => {
    stuff = stuff.filter((thing) => thing._id != id);
    console.table(stuff);
  };

  const findById = (id) => stuff.find((thing) => thing._id === id);

  const find = (func) => stuff.filter(({ data }) => func(data));

  const findAll = () => [...stuff];

  const update = (id, updateFunc) => {
    console.table("stuff: ", stuff);
    stuff = stuff.map((thing) =>
      thing._id === id
        ? Object.freeze({ _id: thing._id, data: updateFunc(thing.data) })
        : thing,
    );
    const thing = stuff.find((thing) => thing._id === id);
    console.log(thing);
    observers.update?.forEach((observerFunc) =>
      observerFunc(thing, { _id, title, collection: [...stuff] }),
    );
    console.table("updated stuff: ", stuff);
    return findById(id);
  };

  const subscribe = (action, oberverFunc) => {
    if (!observers.hasOwnProperty(action)) {
      observers[action] = [];
    }
    observers[action].push(oberverFunc);
    console.table(observers);
    console.table(observers[action]);
  };

  const unsubscribe = (action, observerFunc) => {
    observers[action] = observers[action].filter(
      (func) => func !== observerFunc,
    );
  };

  return {
    get _id() {
      return _id;
    },
    get title() {
      return title;
    },
    add,
    remove,
    find,
    findAll,
    update,
    subscribe,
    unsubscribe,
  };
};
