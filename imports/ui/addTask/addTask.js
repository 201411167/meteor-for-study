import {Template} from 'meteor/templating';
import {Tasks} from '../../api/task.js';

import './addTask.html';

Template.addTask.events({
   'submit .new-task' (event){
       event.preventDefault();

       const target = event.target;
       const text = target.text.value;

       console.log(text);

        Tasks.insert({
            text,
            createdAt: new Date()
        });

        target.text.value='';
   }
});