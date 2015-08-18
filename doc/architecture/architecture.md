Architecture Home Page
=======================

This application is a workflow management system.  Essentially we are looking at a system where general form views can be
set up and connect them to a workflow.

Work flow
----------
Work flow is a sequence of steps.  A step can have many activities and each activity can have a view/form associated.
A step is connected to next step by the next action defined in it. If a Step is a terminating one then next action can
null.

Step
----
A step is a collection of activities. Every step can have a next action except terminating step.  The steps will have
step definitions.  Each step definition is a step type which can be used to identify on what occasion they can be used.
A step can also have a classification.  Classifications can be defined to segregate steps to different categories.

Activity
--------
Activity will also have an activity type and each activity will have a template defined to render them. The system can
provide an activity collection with some filter attached.  The activities will be displayed with some descriptions.
These activities can be added to Step.  So that those activity forms will be displayed as a tabbed pane.  Once that
activity is submitted, system will pick up the next step based on the work-flow defined.  An activiy can have sections so
that the elements can be logically grouped.  They will be rendered in single template/forms but logically grouped.

Template
--------
Template is just a definition of a view elements.  They are converted to real forms at client side.  Each template will
have all elements to define a view.  Potentially Aurelia template can be re-used to define a template.  But they are auto
generated at run time to db so that they can be retrieved when a template request reached to server.

Work view
---------
work view is a module which lists various works assigned to a user.  She can start/resume a work by clicking on it.
A work can be connected to a workflow if there are sequence of steps involved in it.

Workflow editor
--------------
This feature is to dynamically define a work flow.  That means various type of steps can be connected to form a workflow.
These steps would have created initially.



