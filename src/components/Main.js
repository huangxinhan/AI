import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import $ from "jQuery"
import { Button } from '@material-ui/core'
import 'date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: null,
            value2: null
        }
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

    generateTimeline = () => {
        var timeLine = []
        for (var i = 0; i < 1; i++) {
            let data = <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Task Name:</h3><TextField label="enter task name" id="taskName" style={{ left: "870px" }} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Time Start:</h3>  <TextField id="timeStart" type="time" defaultValue="07:30"
                    InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} style={{ left: "900px" }} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Time End:</h3>  <TextField id="timeEnd" type="time" defaultValue="07:30"
                    InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} style={{ left: "900px" }} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Date:</h3><TextField id="date" label="Select Date" type="date" InputLabelProps={{ shrink: true, }} style={{ left: "875px" }} />
                <h3>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Priority:</h3>
                <FormControl id="priority" style={{ left: "900px" }}>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={1}
                    >
                        <MenuItem value={1}>Top Priority</MenuItem>
                        <MenuItem value={2}>Normal Priority</MenuItem>
                        <MenuItem value={3}>Low Priority</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="pythonInput" label="Standard" style={{ visibility: "hidden" }} />
                <TextField id="pythonOutput" label="Standard" style={{ visibility: "hidden" }} />
                <br></br>
                <Button color="primary" id="button1">Generate Schedules</Button>
                <Button color="primary" id="button2" onClick={this.runPythonCode}>Display Schedule</Button>

                <VerticalTimeline>
                    {this.generateTimeline()}
                </VerticalTimeline>
            </div>
        )
    }
}


export default Main