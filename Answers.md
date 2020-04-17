1. What problem does the context API help solve?

The context API allows a child component to receive props from a parent component. It solves the problem of prop drilling, which is when you have to pass props through components that do not need them just to get them to the child component. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are created by action creators and are objects that store data such as the action to be performed and other necessary information as their payload. Reducers take the action along with the current state, and then return the new state. They also tell the store what to do, which is the object that contains the current state of the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is local and application state is global. Redux holds the global application state so that local components can access it with a hook. Component state is more straightforward to use at times when state is temporary and not complex, such as a toggle button. State that matters globally should be in application state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to have action creators that return a function instead of an action. Actions are just objects that don't actually perform an action, so redux-thunk allows us to return a function instead from the action creator which will perform an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I enjoyed using Redux because I can tell that it would be a useful skill to know, and while its complicated to set up, I appreciate how all the little parts come together and create a working application. That being said, the simplicity of context API is definitely a huge plus especially in smaller projects and the fact that they can be used together or at different times is definitely interesting and useful. 
