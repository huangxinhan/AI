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

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: null,
            value2: null,
            taskName: null,
            startTime: null,
            endTime: null,
            date: null,
            priority: null,
            allTasks: [],
            numOfTasks: 0,
            generatedTasks: [],
            forceReset: null,
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

    handleDateChange = (date) => {
        console.log(date)
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

    }

    handlePriorityChange = (event, value) => {
        this.setState({ priority: event.target.value });

    }

    clearAllTasks = () => {
        document.getElementById("taskName").value = null;
        document.getElementById("timeStart").value = null;
        document.getElementById("timeEnd").value = null;
        document.getElementById("date").value = null;
        document.getElementById("state-native-helper priority").value = null;
        this.setState({ numOfTasks: 0 });
        this.setState({ taskName: null, timeStart: null, timeEnd: null, date: null, priority: null })
        this.setState({ allTasks: [] })
        alert("All tasks cleared!")
    }

    addToScheduler = () => {
        var allcheck = [];
        var taskName = this.state.taskName;
        var timeStart = this.state.timeStart;
        var timeEnd = this.state.timeEnd;
        var date = this.state.date;
        var priority = this.state.priority;
        allcheck.push(taskName, timeStart, timeEnd, date, priority);
        var isPassed = true;
        for (var i = 0; i < allcheck.length; i++) {
            if (allcheck[i] == null) {
                alert("One or more values have not been inputted! Please make sure all inputs are properly filled before proceeding!")
                isPassed = false;
                break;
            }
        }
        if (timeStart!= null && timeEnd!= null && timeStart >= timeEnd){
            alert("Invalid time range, please recheck the AMs and PMs");
            isPassed = false;
        }
        if (isPassed == true) {
            alert("current task successfully added to scheduler!");
            this.state.allTasks.push(allcheck);
            this.state.numOfTasks = this.state.numOfTasks + 1;
            document.getElementById("pythonInput").value = this.state.allTasks  //putting this in a document so python can read it
            console.log(document.getElementById('pythonInput').value)
            document.getElementById("taskName").value = null;
            document.getElementById("timeStart").value = null;
            document.getElementById("timeEnd").value = null;
            document.getElementById("date").value = null;
            document.getElementById("state-native-helper priority").value = null;
            this.setState({forceReset: null})
            this.setState({taskName: null, timeStart: null, timeEnd: null, date: null, priority: null})
        }
    }

    generateSchedules = () => {
        //first look at document.getElementByID("pythonOutput").value
        //recreate the task objects 
        //finally return <option> List to populate a drop down
        //now set state to populate the generatedTasks array and refresh the react page
    }

    displayTask = () => {
        //display the task based on this.state.generatedTasks[event.target.value]
        //return a verticaltimelinelement live below
    }

    generateTimeline = () => {
        var timeLine = []
        for (var i = 0; i < 10; i++) {
            let data = <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(173,216,230)', color: '#000000' }}
                contentArrowStyle={{ borderRight: '17px solid  rgb(173,216,230)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(173,216,230)', color: '#000000' }}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
            </VerticalTimelineElement>
            timeLine.push(data);
        }
        return timeLine
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
                <Button color="primary" id="clearAll" onClick={this.clearAllTasks} style={{ left: "875px" }}>Clear all tasks</Button>



                <TextField id="pythonInput" label="Standard" style={{ visibility: "hidden" }} />
                <TextField id="pythonOutput" label="Standard" style={{ visibility: "hidden" }} />
                <br></br>
                <Button color="primary" id="generateSchedules" style={{ left: "720px" }}>Generate Schedules</Button>
                <Button color="primary" id="DisplaySchedules" onClick={this.generateSchedules} style={{ left: "850px" }} >Load Schedules</Button>

                <VerticalTimeline>
                    {this.generateTimeline()}
                </VerticalTimeline>
            </div>
        )
    }
}


export default Main