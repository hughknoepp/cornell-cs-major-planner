import csRosterData from './cs_roster_f26.json'
import mathRosterData from './math_roster_f26.json'

function getCourseRoster(data) {
    try {
        const roster = new Map();
        data.classes.forEach(course => {
            let courseCode = `${course.subject} ${course.catalogNbr}`;
            let courseInfo = {
                title: course["titleLong"],
                description: course["description"],
                courseOutcomes: course["catalogOutcomes"] || [],
                credits: course["enrollGroups"][0]["unitsMinimum"],
                prerequisites: course["catalogPrereq"],
                corequisites: course["catalogCoreq"],
                forbiddenOverlaps: course["catalogForbiddenOverlaps"]
            };
            roster.set(courseCode, courseInfo);
        });

        return roster;
    } catch (error) {
        console.error("Error fetching course roster: ", error);
        throw error;
    }
}

const csClassRoster = getCourseRoster(csRosterData);
const mathClassRoster = getCourseRoster(mathRosterData);

export { csClassRoster, mathClassRoster };