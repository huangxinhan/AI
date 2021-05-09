import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import $ from "jQuery"
import { Button, NativeSelect } from '@material-ui/core'
import 'date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: null,
            value2: null,
            taskName: null,
            timeStart: null,
            timeEnd: null,
            electricity: null,
            date: null,
            priority: null,
            activities: [],
            plans: [],
            final: [],
            output: [],
            numOfTasks: 0,
            generatedSchedules: [],
            forceReset: null,
            timeLineComponents: null
        }
    }

    componentDidMount() {
        document.body.style.backgroundColor = "rgb(237,237,237)"
    }


    runPythonCode = () => {
        console.log(document.getElementById('textfield2').value)
    }

    changeFirstValue = (e) => {
        this.setState({ value1: e.target.value });
    };


    handleTaskNameChange = (event, value) => {
        this.setState({ taskName: event.target.value });

    }

    handletimeStartChange = (event, value) => {
        this.setState({ timeStart: event.target.value });

    }

    handletimeEndChange = (event, value) => {
        this.setState({ timeEnd: event.target.value });

    }

    handleDateChange = (event, value) => {
        this.setState({ date: event.target.value });
        console.log(event.target.value)

    }

    handlePriorityChange = (event, value) => {
        this.setState({ priority: event.target.value });

    }

    handleChangeElectricity = (event, value) => {
        console.log(event.target.checked);
        this.setState({ electricity: event.target.checked})
    }

    clearAllActivities = () => {
        document.getElementById("taskName").value = null;
        document.getElementById("timeStart").value = null;
        document.getElementById("timeEnd").value = null;
        document.getElementById("date").value = null;
        document.getElementById("state-native-helper priority").value = null;
        this.setState({ numOfTasks: 0 });
        this.setState({ taskName: null, timeStart: null, timeEnd: null, date: null, priority: null })
        this.setState({ activities: [], plans: [], final: [], output: [] })
        //alert("All tasks cleared!")
    }

    addToScheduler = () => {
        var allcheck = [];
        var taskName = this.state.taskName;
        var timeStart = this.state.timeStart;
        var timeEnd = this.state.timeEnd;
        var date = this.state.date;
        var priority = this.state.priority;
        var assigned = false;
        var conflict_with = [];
        var count = this.state.activities.length;
        var electricity = this.state.electricity;
        var activityCheck = [taskName, timeStart, timeEnd, date, priority];

        var activity = {};
        activity.taskName = taskName;
        activity.timeStart = timeStart;
        activity.timeEnd = timeEnd;
        activity.date = [date];
        activity.priority = priority;
        activity.assigned = assigned;
        activity.conflict_with = conflict_with;
        activity.count = count;
        activity.electricity = electricity;

        allcheck.push(taskName, timeStart, timeEnd, date, priority);
        var isPassed = true;

        if (activity.timeEnd < activity.timeStart) {
            if (activity.date[0].substr(-5) == "01-31") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "02-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "02-28") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "03-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "03-31") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "04-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "04-30") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "05-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "05-31") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "06-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "06-30") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "07-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "07-31") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "08-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "08-31") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "09-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "09-30") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "10-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "10-31") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "11-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "11-30") {
                var year = activity.date[0].substr(0, 5); //20xx- 
                var new_date = year + "12-01";
                activity.date.push(new_date);
            }
            else if (activity.date[0].substr(-5) == "12-31") {
                var year = activity.date[0].substr(0, 4); //20xx
                var intYear = parseInt(year);
                intYear += 1;
                var yearString = intYear.toString();
                var yearStringWithHyphen = yearString + "-"
                var new_date = yearStringWithHyphen + "01-01";
                activity.date.push(new_date);
            }
        }

        for (var i = 0; i < allcheck.length; i++) {
            if (allcheck[i] == null) {
                alert("One or more values have not been inputted! Please make sure all inputs are properly filled before proceeding!")
                isPassed = false;
                break;
            }
        }

        if (isPassed == true) {
            alert("current task successfully added to scheduler!");
            //if activity.date[0] in a.date and a.date[0] in activity.date:
            this.state.activities.forEach(function (a) {
                console.log("a start time", a.timeStart);
                console.log("activity star time", activity.timeStart);

                if ((activity.timeStart <= a.timeStart && a.timeStart < activity.timeEnd && activity.date[0] === a.date[0]) ||
                    a.date[0] === activity.date[0] && a.timeStart <= activity.timeStart && activity.timeStart < activity.timeEnd) {
                    a.conflict_with.push(activity.count);
                    activity.conflict_with.push(a.count);
                    console.log("a: " + a.conflict_with)
                    console.log("activity: " + activity.conflict_with)
                }
                else if ((activity.date.length === 2 || a.date.length === 2) && ((activity.timeStart < a.timeStart && activity.timeStart < a.timeEnd && a.date.includes(activity.date[0]))
                    || (a.timeStart < activity.timeStart && a.timeStart < activity.timeEnd && activity.date.includes(a.date[0])))) {
                    a.conflict_with.push(activity.count);
                    activity.conflict_with.push(a.count);
                    console.log("a: " + a.conflict_with);
                    console.log("activity: " + activity.conflict_with)
                }
            });

            this.state.activities.push(activity);
            this.state.numOfTasks = this.state.numOfTasks + 1;

            document.getElementById("pythonInput").value = this.state.activities  //putting this in a document so python can read it
            //console.log(document.getElementById('pythonInput').value)
            document.getElementById("taskName").value = null;
            document.getElementById("timeStart").value = null;
            document.getElementById("timeEnd").value = null;
            document.getElementById("date").value = null;
            document.getElementById("state-native-helper priority").value = null;
            this.setState({ forceReset: null })
            this.setState({ taskName: null, timeStart: null, timeEnd: null, date: null, priority: null })
        }

    }

    generateSchedules = () => {
        this.dfs();
        console.log(this.state.output);
        this.objectiveFunction(this.state.output);
        for (var i = 0; i < this.state.output.length; i++){
            var generatedScheduleObject = {}
            generatedScheduleObject.schedule = this.state.output[i];
            generatedScheduleObject.id = i;
            generatedScheduleObject.objectiveFunctionScore = 0;
            this.state.generatedSchedules.push(generatedScheduleObject);
        }
        this.clearAllActivities();
        this.setState({forceReset: null})
    }

    getScheduleContent = () => {
        var totalOptions =  [];
        for (var i = 0; i < this.state.generatedSchedules.length; i++){
            totalOptions.push(i)
        }
        console.log(totalOptions);
        return                     <NativeSelect
        onChange={this.generateTimeline}
        inputProps={{
            name: 'Select Schedule',
            id: 'state-native-helper schedule',
        }}>
            <option aria-label="None" value="">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</option>
        {totalOptions.map((schedules, id) => {
            return(
            <option value={id}>{"Schedule Number " + (id+1)}</option>)
        })}
    </NativeSelect>
    }

    objectiveFunction = (output) => {
        //higher the objective function, further up the list ex. objective function score of 100 -> 1st rank
        //we need to sort this.state.generatedSchedules
    }

    is_a_solution = () => {
        this.state.plans.forEach((plan) => {
            console.log("plan" + plan);
            var bool = false;
            var i = 0;
            while (bool != true && i < plan.length) {
                var activity = plan[i];
                console.log("activity", activity);
                if (activity == 1) {
                    this.state.activities[i].conflict_with.forEach((conflict) => {
                        console.log("plan[conflict]" + plan[conflict])
                        if (plan[conflict] == 1) {
                            bool = true;
                        }
                    })
                }
                i += 1;
            }

            if (bool == true) {
                this.state.final.push(0);
            }
            else {
                this.state.final.push(1);
            }
        });

        for (var i = 1; i < this.state.final.length; i++) {
            if (this.state.final[i] === 1) {
                var a = [];
                for (var j = 0; j < this.state.plans[i].length; j++) {
                    if (this.state.plans[i][j] === 1) {
                        a.push(this.state.activities[j])
                    }
                }
                this.state.output.push(a);
            }
        }
    }

    dfs = () => {
        for (var i = 0; i < parseInt(Math.pow(2, Math.ceil(this.state.activities.length))); i++) {
            this.state.plans.push([]);
            console.log("plans" + this.state.activities.length)
        }

        var length_of_activities = this.state.activities.length;
        var length_of_plans = this.state.plans.length;

        var temp = 1;
        var powcount = 1;

        for (var i = 0; i < length_of_activities; i++) {
            for (var j = 0; j < length_of_plans; j++) {
                if (j % (length_of_plans / parseInt(Math.pow(2, powcount))) === 0) {
                    //if j % (len(self.plans)/int(math.pow(2,powcount))) == 0:
                    temp = (temp + 1) % 2;
                    this.state.plans[j].push(temp);
                }
                else {
                    this.state.plans[j].push(temp);
                }
            }
            powcount = powcount + 1;
        }
        console.log([this.state.plans])
        this.is_a_solution();
    }

    displayTask = () => {
        return this.state.timeLineComponents;
    }



    generateTimeline = (event, value) => {
        var id = event.target.value;
        console.log("id" + event.target.value)
        var schedule = null;
        for (var i = 0; i < this.state.generatedSchedules.length; i++){
            console.log("generatedSchedules.id" + this.state.generatedSchedules[i].id)
            if (this.state.generatedSchedules[i].id == id){
                schedule = this.state.generatedSchedules[i];
            }
        }
        var timeLine = []
        for (var i = 0; i < schedule.schedule.length; i++) {
            let data = <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(173,216,230)', color: '#000000' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(173,216,230)' }}
                date={schedule.schedule[i].date}
                iconStyle={{ background: 'rgb(173,216,230)', color: '#000000' }}
            >
                <h3 className="vertical-timeline-element-title">{schedule.schedule[i].taskName}</h3>
                <h4 className="vertical-timeline-element-subtitle">{schedule.schedule[i].date}</h4>
                <p>
                    time: {schedule.schedule[i].timeStart} - {schedule.schedule[i].timeEnd}
            </p>
            </VerticalTimelineElement>
            timeLine.push(data);
        }
        this.setState({timeLineComponents: timeLine});
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀AI Schedule Generator
                    </h1>
                </div>

                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Task Name:</h3><TextField label="enter task name" id="taskName" onChange={this.handleTaskNameChange} style={{ left: "870px" }} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Uses Electricity:</h3><Checkbox 
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }} onClick = {this.handleChangeElectricity} style={{ left: "925px" }} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Time Start:</h3>  <TextField id="timeStart" type="time"
                    InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} style={{ left: "900px" }} onChange={this.handletimeStartChange} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Time End:</h3>  <TextField id="timeEnd" type="time"
                    InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} style={{ left: "900px" }} onChange={this.handletimeEndChange} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Date:</h3><TextField id="date" label="Select Date" type="date" InputLabelProps={{ shrink: true, }} style={{ left: "875px" }} onChange={this.handleDateChange} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Priority:</h3>
                <FormControl className="Form1" style={{ left: "800px" }}>
                    <InputLabel htmlFor="state-native-helper">Click</InputLabel>
                    <NativeSelect
                        onChange={this.handlePriorityChange}
                        inputProps={{
                            name: 'Select a priority',
                            id: 'state-native-helper priority',
                        }}>
                        <option aria-label="None" value="">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</option>
                        <option value={1}>Low priority</option>
                        <option value={2}>Regular priority</option>
                        <option value={3}>High priority</option>
                    </NativeSelect>
                    <FormHelperText>Priority</FormHelperText>
                </FormControl>
                <br></br><br></br>
                <Button color="primary" id="addNew" onClick={this.addToScheduler} style={{ left: "875px" }}>Add to Scheduler!</Button>
                <br></br><br></br>
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Number of tasks: {this.state.numOfTasks}</h3>
                <Button color="primary" id="clearAll" onClick={this.clearAllActivities} style={{ left: "875px" }}>Clear all tasks</Button>



                <TextField id="pythonInput" label="Standard" style={{ visibility: "hidden" }} />
                <TextField id="pythonOutput" label="Standard" style={{ visibility: "hidden" }} />
                <br></br>
                <Button color="primary" id="generateSchedules" onClick={this.generateSchedules} style={{ left: "860px" }}>Generate Schedules</Button>
                <br></br>

                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Check Schedule:</h3>
                <FormControl className="Form1" style={{ left: "800px" }}>
                    <InputLabel htmlFor="state-native-helper">Click</InputLabel>
                        {this.getScheduleContent()}
                    <FormHelperText>Schedule</FormHelperText>
                </FormControl>

                <VerticalTimeline>
                    {this.displayTask()}
                </VerticalTimeline>
            </div>
        )
    }
}


export default Main