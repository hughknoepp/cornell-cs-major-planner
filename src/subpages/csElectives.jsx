import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { csClassRoster } from '../classRosters'


export default function CSElectives() {
    return (
        <div>
            <h1>Computer Science Electives</h1>
            <h2>Students must complete two 4000+ CS electives from the list below:</h2>
            <ul>
                <li><HashLink smooth to="#cs3700">CS 3700</HashLink> OR <HashLink smooth to="#cs3780">CS 3780</HashLink> if not taken as core requirement</li>
                <li><HashLink smooth to="#cs4210">CS 4210</HashLink></li>
                <li><HashLink smooth to="#cs4320">CS 4320</HashLink></li>
                <li><HashLink smooth to="#cs4420">CS 4420</HashLink></li>
                <li><HashLink smooth to="#cs4620">CS 4620</HashLink></li>
                <li><HashLink smooth to="#cs4744">CS 4744</HashLink></li>
                <li><HashLink smooth to="#cs4750">CS 4750</HashLink></li>
                <li><HashLink smooth to="#cs4787">CS 4787</HashLink></li>
                <li><HashLink smooth to="#cs4789">CS 4789</HashLink></li>
                <li><HashLink smooth to="#cs4814">CS 4814</HashLink></li>
                <li>Others (see current Class Roster and/or consult with your advisor)</li>
            </ul>
            <h3>Course Details:</h3>
            <div id="cs3700">
                <h2>CS 3700: {csClassRoster.get('CS 3700').title}</h2>
                <h3>{csClassRoster.get('CS 3700').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 3700').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 3700').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 3700').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 3700').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs3780">
                <h2>CS 3780: {csClassRoster.get('CS 3780').title}</h2>
                <h3>{csClassRoster.get('CS 3780').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 3780').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 3780').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 3780').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 3780').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4210">
                <h2>CS 4210: {csClassRoster.get('CS 4210').title}</h2>
                <h3>{csClassRoster.get('CS 4210').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4210').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4210').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4210').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4210').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4320">
                <h2>CS 4320: {csClassRoster.get('CS 4320').title}</h2>
                <h3>{csClassRoster.get('CS 4320').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4320').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4320').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4320').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4320').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4420">
                <h2>CS 4420: {csClassRoster.get('CS 4420').title}</h2>
                <h3>{csClassRoster.get('CS 4420').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4420').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4420').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4420').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4420').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4620">
                <h2>CS 4620: {csClassRoster.get('CS 4620').title}</h2>
                <h3>{csClassRoster.get('CS 4620').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4620').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4620').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4620').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4620').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4744">
                <h2>CS 4744: {csClassRoster.get('CS 4744').title}</h2>
                <h3>{csClassRoster.get('CS 4744').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4744').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4744').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4744').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4744').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4750">
                <h2>CS 4750: {csClassRoster.get('CS 4750').title}</h2>
                <h3>{csClassRoster.get('CS 4750').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4750').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4750').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4750').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4750').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4787">
                <h2>CS 4787: {csClassRoster.get('CS 4787').title}</h2>
                <h3>{csClassRoster.get('CS 4787').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4787').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4787').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4787').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4787').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4789">
                <h2>CS 4789: {csClassRoster.get('CS 4789').title}</h2>
                <h3>{csClassRoster.get('CS 4789').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4789').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4789').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4789').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4789').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4814">
                <h2>CS 4814: {csClassRoster.get('CS 4814').title}</h2>
                <h3>{csClassRoster.get('CS 4814').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4814').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4814').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4814').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4814').courseOutcomes.join(', ')}</p>
            </div>
            <Link to="/">
                <button>Return to Home Page</button>
            </Link>
        </div>
    )
}