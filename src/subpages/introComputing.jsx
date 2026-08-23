import { Link } from 'react-router-dom'
import { csClassRoster } from '../classRosters'
import { HashLink } from 'react-router-hash-link'

export default function IntroComputing() {
    return (
        <div>
            <h1>Introductory Computing</h1>
            <h2>Students must complete the following:</h2>
            <ul>
                <li><HashLink smooth to="#cs1110">CS 1110</HashLink> OR <HashLink smooth to="#cs1112">CS 1112</HashLink></li>
                <li><HashLink smooth to="#cs2110">CS 2110</HashLink> OR <HashLink smooth to="#cs2112">CS 2112</HashLink></li>
                <li><HashLink smooth to="#cs2800">CS 2800</HashLink></li>
            </ul>
            <h3>Course Details:</h3>
            <div id="cs1110">
                <h2>CS 1110: {csClassRoster.get('CS 1110').title}</h2>
                <h3>{csClassRoster.get('CS 1110').credits} Credits</h3>
                <h3>Prerequisites: None, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 1110').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 1110').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 1110').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs1112">
                <h2>CS 1112: {csClassRoster.get('CS 1112').title}</h2>
                <h3>{csClassRoster.get('CS 1112').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 1112').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 1112').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 1112').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 1112').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs2110">
                <h2>CS 2110: {csClassRoster.get('CS 2110').title}</h2>
                <h3>{csClassRoster.get('CS 2110').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 2110').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 2110').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 2110').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 2110').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs2112">
                <h2>CS 2112: {csClassRoster.get('CS 2112').title}</h2>
                <h3>{csClassRoster.get('CS 2112').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 2112').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 2112').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 2112').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 2112').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs2800">
                <h2>CS 2800: {csClassRoster.get('CS 2800').title}</h2>
                <h3>{csClassRoster.get('CS 2800').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 2800').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 2800').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 2800').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 2800').courseOutcomes.join(', ')}</p>
            </div>
            <Link to="/">
                <button>Return to Home Page</button>
            </Link>
        </div>
        
    )
}