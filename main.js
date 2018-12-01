/*
Project Integration Management
Project Scope Management
Project Time Management
Project Cost Management
Project Quality Management
Project Human Resource Management
Project Communications Management
Project Risk Management
Project Procurement Management
Project Stakeholder Management

Initiating
Planning
Executing
Monitoring and Controlling
Closing
*/
let ProjectIntegrationManagement
let ProjectScopeManagement
let ProjectTimeManagement
let ProjectCostManagement
let ProjectQualityManagement
let ProjectHumanResourceManagement
let ProjectCommunicationsManagement
let ProjectRiskManagement
let ProjectProcurementManagement
let ProjectStakeholderManagement

var lst=[
    'Project Integration Management',
    'Project Scope Management',
    'Project Time Management',
    'Project Cost Management',
    'Project Quality Management',
    'Project Human Resource Management',
    'Project Communications Management',
    'Project Risk Management',
    'Project Procurement Management',
    'Project Stakeholder Management'
]
function createVariableName(nm){    
    
    return nm.replace(/ +/g, "");
}
// lst.forEach(nm => {
//     console.log('let '+ createVariableName(nm));        
// });

class Management{
    constructor(name) {
        this.name=name;
    }
}

class Process{
    constructor(name,phase) {
        this.name=name;
        this.phase=phase;
    }
    fullInfo () {
        return this.name + " " + this.phase;
    }
}
//Develop Project Charter
let developProjectCharter = new Process('Develop Project Charter','Initiating')

// x = developProjectCharter.fullInfo();
// document.getElementById("demo").innerHTML = x; 

// console.log('Project Integration Management','	',createVariableName('Project Integration Management'));

// let mydata = require('data.json');
var ajaxhttp = new XMLHttpRequest();
// console.log(ajaxhttp);
var url='data.json'
ajaxhttp.open('GET',url,true);
ajaxhttp.setRequestHeader('content-type','application/json');
ajaxhttp.onreadystatechange = function () {
    if (ajaxhttp.readyState==4 && ajaxhttp.status==200) {
        var jcontent= JSON.parse(ajaxhttp.responseText);
        //show data.json
        console.log(jcontent);        
    }
}
ajaxhttp.send(null)

// var mydata = JSON.parse(data);
// Console.log(mydata[0].name);
// Console.log(mydata[0].age);
// Console.log(mydata[1].name);
// Console.log(mydata[1].age);