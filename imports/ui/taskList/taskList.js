import {Template} from 'meteor/templating';

import {Tasks} from '../../api/task.js';

import './taskList.html';

Template.taskList.helpers({
    tasks(){
        return Tasks.find({}, {sort : {createdAt: -1}});
    }
});

Template.taskList.events({
    'click .delete' (event){
        Tasks.remove(this._id);
    },
});