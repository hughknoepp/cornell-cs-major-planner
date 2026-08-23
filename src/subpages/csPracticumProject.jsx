import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { csClassRoster } from "../classRosters";


export default function CSPracticumProject() {
    return (
        <div>
            <h1>Computer Science Practicum or Project</h1>
            <h2>Students must complete one of the following:</h2>
            <ul>
                <li><HashLink smooth to="#cs3152">CS 3152</HashLink></li>
                <li><HashLink smooth to="#cs4121">CS 4121</HashLink></li>
                <li><HashLink smooth to="#cs4152">CS 4152</HashLink></li>
                <li><HashLink smooth to="#cs4321">CS 4321</HashLink></li>
                <li><HashLink smooth to="#cs4411">CS 4411</HashLink></li>
                <li><HashLink smooth to="#cs4621">CS 4621</HashLink></li>
                <li><HashLink smooth to="#cs4701">CS 4701</HashLink></li>
                <li><HashLink smooth to="#cs4740">CS 4740</HashLink></li>
                <li><HashLink smooth to="#cs5121">CS 5121</HashLink></li>
                <li><HashLink smooth to="#cs5150">CS 5150</HashLink></li>
                <li><HashLink smooth to="#cs5152">CS 5152</HashLink></li>
                <li><HashLink smooth to="#cs5321">CS 5321</HashLink></li>
                <li><HashLink smooth to="#cs5411">CS 5411</HashLink></li>
                <li><HashLink smooth to="#cs5412">CS 5412</HashLink></li>
                <li><HashLink smooth to="#cs5414">CS 5414</HashLink></li>
                <li><HashLink smooth to="#cs5621">CS 5621</HashLink></li>
                <li><HashLink smooth to="#cs5625">CS 5625</HashLink></li>
                <li><HashLink smooth to="#cs5643">CS 5643</HashLink></li>
                <li><HashLink smooth to="#cs5740">CS 5740</HashLink></li>
            </ul>
            <h3>Course Details:</h3>
            <div id="cs3152">
                {csClassRoster.has('CS 3152') ? (
                    <>
                        <h2>CS 3152: {csClassRoster.get('CS 3152').title}</h2>
                        <h3>{csClassRoster.get('CS 3152').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 3152').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 3152').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 3152').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 3152').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 3152: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs4121">
                {csClassRoster.has('CS 4121') ? (
                    <>
                        <h2>CS 4121: {csClassRoster.get('CS 4121').title}</h2>
                        <h3>{csClassRoster.get('CS 4121').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 4121').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 4121').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 4121').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 4121').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 4121: This course is not offered in Fall 2026.</p>
                )}
            </div>  
            <div id="cs4152">
                {csClassRoster.has('CS 4152') ? (
                    <>
                        <h2>CS 4152: {csClassRoster.get('CS 4152').title}</h2>
                        <h3>{csClassRoster.get('CS 4152').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 4152').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 4152').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 4152').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 4152').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 4152: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs4321">
                <h2>CS 4321: {csClassRoster.get('CS 4321').title}</h2>
                <h3>{csClassRoster.get('CS 4321').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4321').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4321').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4321').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4321').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4411">
                {csClassRoster.has('CS 4411') ? (
                    <>
                        <h2>CS 4411: {csClassRoster.get('CS 4411').title}</h2>
                        <h3>{csClassRoster.get('CS 4411').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 4411').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 4411').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 4411').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 4411').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 4411: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs4621">
                <h2>CS 4621: {csClassRoster.get('CS 4621').title}</h2>
                <h3>{csClassRoster.get('CS 4621').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4621').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4621').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4621').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4621').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4701">
                <h2>CS 4701: {csClassRoster.get('CS 4701').title}</h2>
                <h3>{csClassRoster.get('CS 4701').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 4701').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 4701').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 4701').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 4701').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs4740">
                {csClassRoster.has('CS 4740') ? (
                    <>
                        <h2>CS 4740: {csClassRoster.get('CS 4740').title}</h2>
                        <h3>{csClassRoster.get('CS 4740').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 4740').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 4740').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 4740').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 4740').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 4740: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5121">
                {csClassRoster.has('CS 5121') ? (
                    <>
                        <h2>CS 5121: {csClassRoster.get('CS 5121').title}</h2>
                        <h3>{csClassRoster.get('CS 5121').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5121').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5121').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5121').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5121').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5121: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5150">
                {csClassRoster.has('CS 5150') ? (
                    <>
                        <h2>CS 5150: {csClassRoster.get('CS 5150').title}</h2>
                        <h3>{csClassRoster.get('CS 5150').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5150').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5150').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5150').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5150').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5150: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5152">
                {csClassRoster.has('CS 5152') ? (
                    <>
                        <h2>CS 5152: {csClassRoster.get('CS 5152').title}</h2>
                        <h3>{csClassRoster.get('CS 5152').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5152').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5152').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5152').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5152').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5152: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5321">
                <h2>CS 5321: {csClassRoster.get('CS 5321').title}</h2>
                <h3>{csClassRoster.get('CS 5321').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 5321').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 5321').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 5321').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 5321').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs5411">
                {csClassRoster.has('CS 5411') ? (
                    <>
                        <h2>CS 5411: {csClassRoster.get('CS 5411').title}</h2>
                        <h3>{csClassRoster.get('CS 5411').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5411').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5411').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5411').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5411').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5411: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5412">
                {csClassRoster.has('CS 5412') ? (
                    <>
                        <h2>CS 5412: {csClassRoster.get('CS 5412').title}</h2>
                        <h3>{csClassRoster.get('CS 5412').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5412').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5412').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5412').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5412').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5412: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5414">
                <h2>CS 5414: {csClassRoster.get('CS 5414').title}</h2>
                <h3>{csClassRoster.get('CS 5414').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 5414').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 5414').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 5414').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 5414').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs5621">
                <h2>CS 5621: {csClassRoster.get('CS 5621').title}</h2>
                <h3>{csClassRoster.get('CS 5621').credits} Credits</h3>
                <h3>Prerequisites: {csClassRoster.get('CS 5621').prerequisites}, Corequisites: None</h3>
                <h3>Forbidden Overlaps: {csClassRoster.get('CS 5621').forbiddenOverlaps}</h3>
                <p>{csClassRoster.get('CS 5621').description}</p>
                <p>Course Outcomes: <br />
                {csClassRoster.get('CS 5621').courseOutcomes.join(', ')}</p>
            </div>
            <div id="cs5625">
                {csClassRoster.has('CS 5625') ? (
                    <>
                        <h2>CS 5625: {csClassRoster.get('CS 5625').title}</h2>
                        <h3>{csClassRoster.get('CS 5625').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5625').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5625').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5625').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5625').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5625: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5643">
                {csClassRoster.has('CS 5643') ? (
                    <>
                        <h2>CS 5643: {csClassRoster.get('CS 5643').title}</h2>
                        <h3>{csClassRoster.get('CS 5643').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5643').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5643').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5643').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5643').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5643: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <div id="cs5740">
                {csClassRoster.has('CS 5740') ? (
                    <>
                        <h2>CS 5740: {csClassRoster.get('CS 5740').title}</h2>
                        <h3>{csClassRoster.get('CS 5740').credits} Credits</h3>
                        <h3>Prerequisites: {csClassRoster.get('CS 5740').prerequisites}, Corequisites: None</h3>
                        <h3>Forbidden Overlaps: {csClassRoster.get('CS 5740').forbiddenOverlaps}</h3>
                        <p>{csClassRoster.get('CS 5740').description}</p>
                        <p>Course Outcomes: <br />
                        {csClassRoster.get('CS 5740').courseOutcomes.join(', ')}</p>
                    </>
                ) : (
                    <p>CS 5740: This course is not offered in Fall 2026.</p>
                )}
            </div>
            <Link to="/">
                <button>Return to Home Page</button>
            </Link>
        </div>
    )
}