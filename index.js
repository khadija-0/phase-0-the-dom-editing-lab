function addingEventListener(event,target){
    console.log(this.someVar);
    console.log(event,target);
}

addingEventListener = addingEventListener.bind({someVar: 1234});

target.addEventListener('click', addingEventListener);

let button = document.querySelector("button");
  button.addEventListener("mousedown", event => {
    if (event.button == 0) {
        console.log(false);
    } else if (event.button == 1) {
        console.log(true);
    }
  });
  