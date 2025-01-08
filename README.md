
# React Assignment - NxtWave

### *Prerequisites*

- Knowledge of *ReactJS Hooks (obviously), HTML, CSS and JS*.
- Knowledge of installing npm packages (both local & global)
- Knowledge of creating React applications using [*Create React App*](https://facebook.github.io/create-react-app/)
- Knowledge of fetching JSON data from a REST API endpoint
- A Github account in order to share your code with us
- Using *Redux or Mobx* or any other state management library is an added advantage.

### Assignment Screens :

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - All lists](https://assets.ccbp.in/frontend/content/react-js/list-creation-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - List creation](https://assets.ccbp.in/frontend/content/react-js/list-creation-create-a-new-list-lg-output.png)

!https://new-assets.ccbp.in/frontend/content/react-js/list_creation_output.gif

## Assignment Description:

<aside>
👇 Click on the below link to view the Assignment description

[Assignment](https://www.notion.so/Assignment-14dde5455f22818ea455ee9ea2d6af46?pvs=21)

</aside>

### APIs:

- List Creation API: *https://apis.ccbp.in/list-creation/lists*

### References:

These are the references for the best practices that you can follow while developing this assignment

- https://reactjs.org/docs/components-and-props.html
- https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/

### *Code Guidelines*

- Write self-explanatory code: Give meaningful names to components, methods, and variables to increase the readability of the code.
- Don't use flag arguments (Ex: booleans), instead split components/ functions that can be used without the flag.
    - Read more: https://understandlegacycode.com/blog/what-is-wrong-with-boolean-parameters/#4-otherwise-split-the-function
- Extract magic numbers & strings into constants :
    - Read more here: https://www.codingzeal.com/post/developer-dark-arts-magic-strings
- Always use destructuring.

### React Specific Guidelines

- A component has a *single responsibility,* which means it has one reason to change.
- Writing reusable components:
    - Able to customise the UI
    - Expose necessary props
- Create separate files for each component.
    - Use styled-components if you are familiar with it
- Handle all the API statuses like Loading, Success and Failure, etc.,

### Development Process

- Go through the given screens
- Prepare *ELP*(Execution Level Plan) i.e
    - Break the UI into Component Hierarchy
    - Identify minimal state & where to maintain it
    - List down different *cases* for the components
- Start building with common components and gradually compose them to get the given UI.
- Maintain proper Git History with appropriate commit messages
- Write the code using React Hooks
- *Self-review* your code against the guidelines before you submit it.

## *Submission guidelines*

1. *Before Starting the Assignment:*
    
    Create a public Github repository to work on this assignment
    
2. *After completing the Assignment*
    
    You need to submit your public Github repository Link and a Loom video recording explaining your code and how it works by showing your output.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment Question

### Common Instructions:

1. Add Loading and Failure views for all the APIs.
2. Develop the UI exactly as in the images.
3. The UI should be responsive. If the screens are not given, and the design is your call. You can achieve responsiveness using media queries, flex properties, etc.
4. Deploy your website in a public URL using Github Pages and share it in the README.md file of the project. If you don’t know how to deploy, you can follow the below video
*How To Deploy A React App To Github Pages :* https://youtu.be/Q9n2mLqXFpU

### Description:

!https://new-assets.ccbp.in/frontend/content/react-js/list_creation_output.gif

- When the page is opened,
    - An HTTP GET request should be made to the *List Creation API URL*.
        - **Loader** should be displayed while fetching the data.
        - After the data is fetched successfully, then the list items should be displayed in the respective list container based on the list_number received from the response.
        - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/list-creation-failure-lg-output.png) should be displayed.
            - When the *Try Again* button is clicked, an HTTP GET request should be made to the *List Creation API URL*.
    - When exactly two list containers are not checked and the *Create a new list* button is clicked, then the error message *You should select exactly 2 lists to create a new list* should be displayed
    - When the exactly two list containers are checked and clicked the *Create a new list* button,
        - List Creation view should be displayed
        - In List Creation view, a new empty list container should be displayed in between the two checked list containers.
        - When the right arrow image of the list item in the first list container is clicked, then the respective list item should be moved to the new list container.
        - When the left arrow image of the list item in the second list container is clicked, then the respective list item should be moved to the new list container.
        - When the right arrow image of the list item in the new list container is clicked, then the respective list item should be moved to the second list container.
        - When the left arrow image of the list item in the new list container is clicked, then the respective list item should be moved to the first list container.
        - When the *Cancel* button is clicked in List Creation view, then all the changes should be cancelled and the All Lists view should be displayed.
        - When the *Update* button is clicked in List Creation view, then the All Lists view should be displayed with the updated list containers.
