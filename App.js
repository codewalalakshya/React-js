//  <!-- how to creat element in react and add it to DOM     -->

//  const heading = React.createElement("h1" , {} , "Hello World from React");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

        // how to create nested element in react and add it to DOM
        const heading1 = React.createElement("div" , {id : "parent"} , React.createElement("div" , {id : "child1"} , 
            [React.createElement("h1" , {} , "I am h1 tag from child1") , 
                React.createElement("h2" , {} , "I am h2 tag from child1")]) ,
                 React.createElement("div" , {id : "child2"} ,
                     [React.createElement("h1" , {} , "I am h1 tag from child2") ,
                         React.createElement("h2" , {} , "I am h2 tag from child2")]  ));
       const root1 = ReactDOM.createRoot(document.getElementById("root1"));
       root1.render(heading1);