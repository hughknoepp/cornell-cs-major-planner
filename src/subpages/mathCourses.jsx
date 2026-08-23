import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { mathClassRoster } from '../classRosters'

export default function MathCourses() {
    return (
        <div>
            <h1>Math Requirements</h1>
            <h2>Students must complete the following:</h2>
            <ul>
                <li><HashLink smooth to="#math1110">MATH 1110</HashLink> OR <HashLink smooth to="#math1910">MATH 1910</HashLink></li>
                <li><HashLink smooth to="#math1120">MATH 1120</HashLink> OR <HashLink smooth to="#math1920">MATH 1920</HashLink></li>
                <li><HashLink smooth to="#math2210">MATH 2210</HashLink> OR <HashLink smooth to="#math2310">MATH 2310</HashLink> OR <HashLink smooth to="#math2940">MATH 2940</HashLink></li>
            </ul>
            <h3>Course Details:</h3>
            <div id="math1110">
                <h2>MATH 1110: {mathClassRoster.get('MATH 1110').title}</h2>
                <h3>{mathClassRoster.get('MATH 1110').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 1110').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 1110').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 1110').description}</p>
            </div>
            <div id="math1120">
                <h2>MATH 1120: {mathClassRoster.get('MATH 1120').title}</h2>
                <h3>{mathClassRoster.get('MATH 1120').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 1120').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 1120').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 1120').description}</p>
            </div>
            <div id="math1910">
                <h2>MATH 1910: {mathClassRoster.get('MATH 1910').title}</h2>
                <h3>{mathClassRoster.get('MATH 1910').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 1910').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 1910').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 1910').description}</p>
            </div>
            <div id="math1920">
                <h2>MATH 1920: {mathClassRoster.get('MATH 1920').title}</h2>
                <h3>{mathClassRoster.get('MATH 1920').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 1920').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 1920').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 1920').description}</p>
            </div>
            <div id="math2210">
                <h2>MATH 2210: {mathClassRoster.get('MATH 2210').title}</h2>
                <h3>{mathClassRoster.get('MATH 2210').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 2210').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 2210').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 2210').description}</p>
            </div>
            <div id="math2310">
                <h2>MATH 2310: {mathClassRoster.get('MATH 2310').title}</h2>
                <h3>{mathClassRoster.get('MATH 2310').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 2310').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 2310').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 2310').description}</p>
            </div>
            <div id="math2940">
                <h2>MATH 2940: {mathClassRoster.get('MATH 2940').title}</h2>
                <h3>{mathClassRoster.get('MATH 2940').credits} Credits</h3>
                <h3>Prerequisites: {mathClassRoster.get('MATH 2940').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {mathClassRoster.get('MATH 2940').forbiddenOverlaps}</h3>
                <p>{mathClassRoster.get('MATH 2940').description}</p>
            </div>
            <Link to="/">
                <button>Return to Home Page</button>
            </Link>
        </div>
    )
}