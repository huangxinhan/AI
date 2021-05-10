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
            timeLineComponents: null,
            energyUse:[],
            average:0
        }
    }

    componentDidMount() {
        document.body.style.backgroundColor = "rgb(237,237,237)"
        this.setState({ energyUse:[21.57782311,19.34467933,17.59240483,7.78093914,17.94164187,35.15887105
           ,20.2079925,18.75924317,19.82504527,11.30150742,31.28307684,32.1244018
           ,26.27764085,31.97989157,24.23532704,19.86937852,22.320769,21.3760931
           ,20.84566105,30.18933845,24.90174049,18.7948103,18.39843684,18.01211943
           ,26.20112991,22.64372971,24.55715741,20.86642663,20.99802585,20.66146724
           ,24.63344867,27.6910454,25.60666406,25.75796749,15.22476111,24.49633722
           ,19.12368033,12.41936902,18.60109071,28.29311321,18.03855267,13.76937528
           ,12.50324837,22.24490766,28.64272972,23.01391375,22.86438143,20.34756384
           ,21.36653463,12.41599242,25.70361232,28.69594195,23.05083549,32.68693271
           ,29.6789407,25.41185682,20.23947757,24.63567151,17.90166729,18.62198475
           ,30.14722792,23.86165815,20.14179169,28.24785921,15.43622162,20.54619068
           ,29.44723673,29.03147111,35.33627461,32.13539761,35.17614387,24.68556751
           ,23.64749448,31.45157796,24.07386923,22.1983272,19.22876775,24.4732817
           ,30.23807784,29.95329609,26.4538071,27.94863521,20.70304409,22.94778597
           ,24.23188674,17.16158696,30.94675117,27.17261157,30.84156712,23.71392952
           ,29.99880464,29.34972907,25.73503355,34.25002452,26.71942345,23.47178042
           ,25.23049536,39.59194059,26.45572044,20.26769521,39.68766787,24.42909539
           ,36.85265443,35.59773221,38.31922339,24.09317609,22.11237061,24.31661506
           ,22.45159241,17.9512999,14.40577795,37.60523267,34.60046273,20.46194215
           ,21.70636144,38.42434461,31.84115971,31.48739819,29.65041669,26.88905541
           ,39.66836992,39.39007616,36.97195558,37.36377409,35.43290444,30.59203332
           ,24.10327649,37.94332928,33.33055102,43.85797187,24.17624779,27.0352146
           ,41.4101659,37.17414073,38.52115507,36.7814507,39.94538768,31.94246599
           ,29.98440923,28.46382556,33.50256897,41.6293968,40.46813933,38.93492736
           ,39.51819612,38.18882845,47.8389281,29.61805919,30.79599723,37.56333821
           ,33.416552,28.31918372,38.91130626,43.85844791,43.16775502,44.6157125
           ,42.38768593,40.56889635,40.52026323,45.33708302,46.06858273,43.33312002
           ,38.25248845,43.95097033,41.53500712,38.30221873,35.94783775,46.35207263
           ,47.20386609,44.04112739,36.68966542,39.23111202,40.58853346,38.70011396
           ,40.72912606,46.70406772,51.18017041,42.29089624,39.18013784,41.88339934
           ,44.09128527,46.43766477,51.76727551,//these 182 values are predicted 
           36.22688918,36.98024922,29.6487493,33.16242178,32.69400118,30.55955613,
            31.75932817,36.20745397,33.13840344,35.76080215,35.36175276,35.74824658
           ,29.42422414,34.56169785,36.26537758,36.38363734,35.19185821,32.19151105
            ,33.94689411,36.07159478,35.10970882,37.3863836,33.32100111,34.15380647
           ,34.72156135,30.24373411,32.36613832,32.11723251,32.2225044,36.30114132
           ,35.66001103,33.93003404,34.94375302,37.28375227,32.64909618,33.51057544
           ,34.03482899,34.11152643,33.13749483,34.27794753,34.28913125,51.09789532
          ,31.63211594,31.41083821,31.79600963,31.98257082,32.67535749,29.54818429
           ,33.40230068,31.20511986,21.14193966,28.67577451,32.51862643,35.39439365
           ,36.57630636,39.68478321,34.58192751,34.81512251,33.57616573,34.25221599
           ,39.67529352,36.11598479,34.20466062,35.11307083,36.10141013,34.90811496
           ,32.06145884,30.77655285,32.50633984,31.02078434,28.70069214,35.66937196
           ,30.12738005,33.49988893,29.40570266,28.01169575,33.22097226,32.8664756
           ,29.41706543,31.98920281,31.88058584,32.03733507,33.98694182,32.80969098
           ,30.89843155,29.94560193,33.86867112,37.48696313,34.06776423,27.91552441
           ,19.5867684,20.4450899,30.55816484,29.44556228,27.6006201,30.00649172
           ,29.76135241,27.32480845,30.90108543,31.87175313,24.62213095,34.1343979
           ,30.29940925,33.03763368,31.80171762,28.9322039,29.51186286,27.41331741
           ,29.73431533,30.06423788,26.66539897,18.75502864,23.36676949,20.6662569
           ,30.30096046,29.00915987,32.25869074,28.25928478,31.80197911,30.08319642
           ,26.43077231,17.7648754,22.5588237,29.35088986,28.75765581,32.30056301
           ,26.54877602,21.93595299,30.31905496,31.31898671,27.16203924,28.40718008
           ,32.04551887,32.38262606,26.46330886,30.37977048,28.03624839,24.92602833
           ,23.66898027,28.73392274,28.35310477,31.04826639,29.08639438,31.78622048
           ,30.92535066,29.28867472,34.17875045,22.43878963,26.60145866,27.57431229
           ,27.82302177,30.16517092,33.97287366,21.46094468,32.61771743,27.74490406
           ,20.55457459,24.29801064,29.44167262,27.22797359,18.42047578,21.59660879
           ,24.22697251,27.10592514,26.04280065,29.00278113,20.72055278,21.68766813
           ,26.98688933,27.52766264,28.19444827,21.72117325,19.45568751,13.92554745
           ,19.54125489,24.78377316,33.18065489,28.91090882,24.61368369,31.00474088
           ,32.58075832,29.47712839 // these 182 values are copied
        
        
        ],average:30.00348996328768})}
        


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
        this.setState({ activities: [], plans: [], final: [], output: [], generatedSchedules: []})
        //alert("All tasks cleared!")
    }

    clearAllActivities1 = () => {
        document.getElementById("taskName").value = null;
        document.getElementById("timeStart").value = null;
        document.getElementById("timeEnd").value = null;
        document.getElementById("date").value = null;
        document.getElementById("state-native-helper priority").value = null;
        this.setState({ numOfTasks: 0 });
        this.setState({ taskName: null, timeStart: null, timeEnd: null, date: null, priority: null })
        this.setState({ activities: [], plans: [], final: [], output: []})
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
            this.setState({ activities_copy : this.state.activities })
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
       // this.setState({generatedSchedules: []})
        for (var i = 0; i < this.state.output.length; i++){
            var generatedScheduleObject = {}
            generatedScheduleObject.schedule = this.state.output[i];
            generatedScheduleObject.id = i;
            generatedScheduleObject.objectiveFunctionScore = 0;
            this.state.generatedSchedules.push(generatedScheduleObject);
        }
        setTimeout(this.afterGenerateSchedules, 1000);
        // this.clearAllActivities1();
        // this.objectiveFunction(this.state.generatedSchedules);
        // console.log("generated schedules " +this.state.generatedSchedules)
        // this.setState({forceReset: null})
    }

    afterGenerateSchedules = () => {
        this.clearAllActivities1();
        this.objectiveFunction(this.state.generatedSchedules);
        console.log("generated schedules " +this.state.generatedSchedules)
        this.setState({forceReset: null})
    }


    objectiveFunction = (generatedSchedules) => {
        //higher the objective function, further up the list ex. objective function score of 100 -> 1st rank
        //we need to sort this.state.generatedSchedules
        // each schedule may have different number of plans,
        //1. make sure the schedule with more activites has higher score
        //2. make sure the schedule with more prefrenced value has higher score
        //3. add in the energy usage data to further calculate preference level/
        //activities_copy
        for (i = 0; i < this.state.activities_copy.length; i++){
            var month = this.state.activities_copy[i].date[0].substr(5,7)
            month = parseInt(month)
            var days = this.state.activities_copy[i].date[0].substr(8)
            days = parseInt(days)
            var nthDay = 0
            if ( month  = 1 ){
                nthDay = 0+days
            }
            else if ( month  = 2 ){
                nthDay = 31+days
            }
            else if ( month  = 3 ){
                nthDay = 59+days
            }
            else if ( month  = 4 ){
                nthDay = 90+days
            }
            else if ( month  = 5 ){
                nthDay = 120+days
            }
            else if ( month  = 6 ){
                nthDay = 151+days
            }
            else if ( month  = 7 ){
                nthDay = 181+days
            }
            else if ( month  = 8 ){
                nthDay = 212+days
            }
            else if ( month  = 9 ){
                nthDay = 233+days
            }
            else if ( month  = 10 ){
                nthDay = 263+days
            }
            else if ( month  = 11 ){
                nthDay = 294+days
            }
            else if ( month  = 12 ){
                nthDay = 335+days
            }

            
            console.log("days " + days)
            console.log("nthday " + nthDay)
            if (this.state.energyUse[nthDay-1] > this.state.average && this.state.activities_copy[i].electricity===true){
                this.state.activities_copy[i].priority = parseInt(this.state.activities_copy[i].priority) - 1
                
            }            
        }
                


        for(var i = 0; i < generatedSchedules.length; i++){
            var tempScore = 0
            for(var j = 0; j < generatedSchedules[i].schedule.length;j++){
            //     if energy_usage[activity.date[0]] > average_usage and activity.electricity == True:
            //     activity.priority -= 1
            // temp_score += activity.priority
            // "2021-05-05"
            //  31
            //  59
            //  90
            //  120
            //  151
            //  181
            //  212
            //  233
            //  263
            //  294
            //  324
            //  335
                tempScore += parseInt(generatedSchedules[i].schedule[j].priority)
            }
            generatedSchedules[i].objectiveFunctionScore = tempScore
        }
        
        // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
        this.setState({generatedSchedules: this.state.generatedSchedules.sort((a,b) => (a.objectiveFunctionScore < b.objectiveFunctionScore) ? 1 : -1)})
        for ( var i = 0; i < this.state.generatedSchedules.length; i++){
            console.log("objective function score " + this.state.generatedSchedules[i].objectiveFunctionScore);
        }
    }

    getScheduleContent = () => {
        
        var totalOptions =  [];
        console.log("generated schedules " +this.state.generatedSchedules)
        for (var i = 0; i < this.state.generatedSchedules.length; i++){
            totalOptions.push(this.state.generatedSchedules[i])
            console.log("outputted generated schedules score:" + this.state.generatedSchedules[i].objectiveFunctionScore)
        }
        console.log(totalOptions);
        return                     <NativeSelect
        onChange={this.generateTimeline}
        inputProps={{
            name: 'Select Schedule',
            id: 'state-native-helper schedule',
        }}>
            <option aria-label="None" value="">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</option>
        {totalOptions.map((schedules) => {
            return(
            <option value={schedules.id}>{"Schedule Number " + (schedules.id+1) + " Objective Function Score: " + schedules.objectiveFunctionScore}</option>)
        })}
    </NativeSelect>
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

        //sort
        schedule.schedule.sort((a,b) => (a.date + a.timeEnd > b.date + a.timeEnd) ? 1 : -1);
        
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
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Uses Electricity:</h3><Checkbox 
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }} onClick = {this.handleChangeElectricity} style={{ left: "930px" }} />
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
                <Button color="secondary" id="clearAll" onClick={this.clearAllActivities} style={{ left: "655px" }}>Clear all tasks (Must click clear all tasks before starting a new schedule!)</Button>



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