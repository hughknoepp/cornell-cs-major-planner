import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { csClassRoster } from '../classRosters'

export default function CSCore() {
    return (
        <div>
            <h1>Computer Science Core Courses</h1>
            <h2>Students must complete the following:</h2>
            <ul>
                <li><HashLink smooth to="#cs3110">CS 3110</HashLink></li>
                <li><HashLink smooth to="#cs3410">CS 3410</HashLink> OR <HashLink smooth to="#cs3420">CS 3420</HashLink></li>
                <li><HashLink smooth to="#cs3700">CS 3700</HashLink> OR <HashLink smooth to="#cs3780">CS 3780</HashLink></li>
                <li><HashLink smooth to="#cs4410">CS 4410</HashLink> OR <HashLink smooth to="#cs4414">CS 4414</HashLink></li>
                <li><HashLink smooth to="#cs4820">CS 4820</HashLink></li>
            </ul>
            <h3>Course Details:</h3>
            <div id="cs3110">
                <h2>CS 3110: {csClassRoster.get('CS 3110').title}</h2>
                <h3>{csClassRoster.get('CS 3110').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 3110').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 3110').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 3110').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 3110').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs3410">
                <h2>CS 3410: {csClassRoster.get('CS 3410').title}</h2>
                <h3>{csClassRoster.get('CS 3410').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 3410').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 3410').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 3410').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 3410').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs3420">
                <h2>CS 3420: {csClassRoster.get('CS 3420').title}</h2>
                <h3>{csClassRoster.get('CS 3420').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 3420').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 3420').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 3420').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 3420').courseOutcomes.join(', ')}</p>
            </div>
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
            <div id="cs4410">
                {csClassRoster.has('CS 4410') ? (
                    <>
                        <h2>CS 4410: {csClassRoster.get('CS 4410').title}</h2>
                        <h3>{csClassRoster.get('CS 4410').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 4410').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 4410').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 4410').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 4410').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 4410: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs4414">
                <h2>CS 4414: {csClassRoster.get('CS 4414').title}</h2>
                <h3>{csClassRoster.get('CS 4414').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4414').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4414').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4414').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4414').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4820">
                <h2>CS 4820: {csClassRoster.get('CS 4820').title}</h2>
                <h3>{csClassRoster.get('CS 4820').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4820').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4820').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4820').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4820').courseOutcomes.join(', ')}</p>
            </div>
            <Link to="/">
                <button>Return to Home Page</button>
            </Link>
        </div>
    )
}