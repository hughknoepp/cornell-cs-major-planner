import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useAuth } from './auth/AuthContext'
import { apiFetch } from './lib/api'

export default function Home() {
  const { user, logout } = useAuth()

  // State variables to track completed courses for each category, and then one for all completed courses
  const [introCSCompleted, setIntroCSCompleted] = useState([])
  const [mathCompleted, setMathCompleted] = useState([])
  const [coreCompleted, setCoreCompleted] = useState([])
  const [electivesCompleted, setElectivesCompleted] = useState([])
  const [practicumCompleted, setPracticumCompleted] = useState([])
  const [technicalElectivesCompleted, setTechnicalElectivesCompleted] = useState([])
  const [externalSpecCompleted, setExternalSpecCompleted] = useState([])
  const [threeCreditElective, setThreeCreditElective] = useState(false)
  const [allCompleted, setAllCompleted] = useState([])

  // Tracks whether saved progress has finished loading, so the save effect
  // below doesn't fire (and overwrite the saved data with empty arrays)
  // before the initial load completes.
  const hasLoadedProgress = useRef(false)

  useEffect(() => {
    apiFetch('/progress')
      .then(({ data }) => {
        setIntroCSCompleted(data.introCSCompleted || [])
        setMathCompleted(data.mathCompleted || [])
        setCoreCompleted(data.coreCompleted || [])
        setElectivesCompleted(data.electivesCompleted || [])
        setPracticumCompleted(data.practicumCompleted || [])
        setTechnicalElectivesCompleted(data.technicalElectivesCompleted || [])
        setExternalSpecCompleted(data.externalSpecCompleted || [])
        setThreeCreditElective(data.threeCreditElective || false)
        setAllCompleted(data.allCompleted || [])
      })
      .finally(() => {
        hasLoadedProgress.current = true
      })
  }, [])

  useEffect(() => {
    if (!hasLoadedProgress.current) return

    const timeoutId = setTimeout(() => {
      apiFetch('/progress', {
        method: 'PUT',
        body: JSON.stringify({
          data: {
            introCSCompleted,
            mathCompleted,
            coreCompleted,
            electivesCompleted,
            practicumCompleted,
            allCompleted,
          },
        }),
      })
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [introCSCompleted, mathCompleted, coreCompleted, electivesCompleted, practicumCompleted, allCompleted])

  // Arrays of courses for each category (i.e. Intro Computing, Linear Algebra, Calculus)
  const linAlg = ['MATH 2210', 'MATH 2310', 'MATH 2940', 'MATH 2230']
  const calculus = ['MATH 1110', 'MATH 1120', 'MATH 1910', 'MATH 1920', 'MATH 2220', 'MATH 2240']
  const introCS = ['CS 111X', 'CS 211X', 'CS 2800']
  const statsProb = ['CS 2800', 'STSCI 3080', 'ECON 3130', 'ENGRD 2700', 'MATH 4710']
  const multivarCalc = calculus.slice(3) // MATH 1920, MATH 2220, MATH 2240
  const aiml = ['CS 3700', 'CS 3780', 'CS 4670', 'CS 4740', 'ECE 4200', 'ORIE 3741', 'STSCI 3740'] // AI / Machine Learning Courses
  const introPhysics = ['PHYS 1101', 'PHYS 1112', 'PHYS 2207']

  // Function to add or remove a course from the completed courses list based on the category
  const addRemoveCourse = (course, category) => {
    switch (category) {
      case 'introCS':
        if (introCSCompleted.includes(course)) {
          setIntroCSCompleted(introCSCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setIntroCSCompleted([...introCSCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'math':
        if (mathCompleted.includes(course)) {
          setMathCompleted(mathCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setMathCompleted([...mathCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'core':
        if (coreCompleted.includes(course)) {
          setCoreCompleted(coreCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setCoreCompleted([...coreCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'electives':
        if (electivesCompleted.includes(course)) {
          setElectivesCompleted(electivesCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setElectivesCompleted([...electivesCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'practicum':
        if (practicumCompleted.includes(course)) {
          setPracticumCompleted(practicumCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setPracticumCompleted([...practicumCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'technicalElectives':
        if (technicalElectivesCompleted.includes(course)) {
          setTechnicalElectivesCompleted(technicalElectivesCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setTechnicalElectivesCompleted([...technicalElectivesCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'externalSpec':
        if (externalSpecCompleted.includes(course)) {
          setExternalSpecCompleted(externalSpecCompleted.filter(c => c !== course))
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setExternalSpecCompleted([...externalSpecCompleted, course])
          setAllCompleted([...allCompleted, course])
        }
        break
      case 'threeCreditElective':
        setThreeCreditElective(!threeCreditElective)
        break
      default:
        if (allCompleted.includes(course)) {
          setAllCompleted(allCompleted.filter(c => c !== course))
        } else {
          setAllCompleted([...allCompleted, course])
        }
        break
    }
  }

  return (
    <>
      <section id="header">
        <div>
          <img src="https://bowers.cornell.edu/themes/custom/dubdub_default/logo.svg" alt="Cornell University Bowers CIS Logo" />
        </div>
      </section>
      <section id="center">
        <div>
          <h1>Welcome to Cornell's CS Major Tracker!</h1>
          <h2>Click on the links below to explore the Computer Science curriculum and requirements:</h2>
          <nav>
            <ul>
              <li><HashLink smooth to="#intro-cs-courses">Introductory Computing</HashLink></li>
              <li><HashLink smooth to="#math-courses">Math Requirements</HashLink></li>
              <li><HashLink smooth to="#cs-core-courses">CS Core Courses</HashLink></li>
              <li><HashLink smooth to="#cs-electives">CS Electives</HashLink></li>
              <li><HashLink smooth to="#cs-practicum-project">CS Practicum/Project</HashLink></li>
            </ul>
          </nav>
          <p>All Completed Courses: {allCompleted.sort((a, b) => a.localeCompare(b)).join(', ')}</p>
          <p>Logged in as {user?.email} <button onClick={logout}>Log Out</button></p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps-1">
        <div id="intro-cs-courses">
          <h2>Introductory Computing</h2>
          <h3>Completed: {introCSCompleted.join(', ')}</h3>
          <h3>{introCS.every(c => introCSCompleted.includes(c)) ? 'All requirements met' : 'Additional courses required'}</h3>
          <p style={{ color: '#ffffff'}}>Students must complete the following:<br />
          CS 1110 OR CS 1112 (or equivalent AP/IB or CASE exam credit)  <button onClick={() => addRemoveCourse('CS 111X', 'introCS')} disabled={introCSCompleted.includes('CS 211X')}>Add/Remove Course</button><br />
          CS 2110 OR CS 2112  <button onClick={() => addRemoveCourse('CS 211X', 'introCS')} disabled={!(introCSCompleted.includes('CS 111X'))}>Add/Remove Course</button><br />
          CS 2800  <button onClick={() => addRemoveCourse('CS 2800', 'introCS')}>Add/Remove Course</button>
          </p>
          <h4>Additional Computing Courses (may be required/recommended for some upper-level courses)</h4>
          <ul>
            <li>CS 1133 <button onClick={() => addRemoveCourse('CS 1133')}>Add/Remove Course</button></li>
            <li>CS 2024 <button onClick={() => addRemoveCourse('CS 2024')}>Add/Remove Course</button></li>
          </ul>
          <Link to="/introComputing">
            <button>See Course Descriptions</button>
          </Link>
        </div>
        <div id="math-courses">
          <h2>Math</h2>
          <h3>Completed: {mathCompleted.join(', ')}</h3>
          <h3>{mathCompleted.length >= 3 && 
          linAlg.some(c => mathCompleted.includes(c))? 'All requirements met' : 'Additional courses required'}</h3>
          <p style={{ color: '#ffffff' }}>Students must complete the following:<br />
          MATH 1110 <button onClick={() => addRemoveCourse('MATH 1110', 'math')} 
          disabled={mathCompleted.includes('MATH 1910')}>Add/Remove Course</button> 
          OR MATH 1910 <button onClick={() => addRemoveCourse('MATH 1910', 'math')} 
          disabled={mathCompleted.includes('MATH 1120')}>Add/Remove Course</button>(or equivalent AP/IB/GCE or CASE exam credit)<br />
          MATH 1120 <button onClick={() => addRemoveCourse('MATH 1120', 'math')} 
          disabled={mathCompleted.includes('MATH 1910') || mathCompleted.includes('MATH 1920')}>Add/Remove Course</button>
          OR MATH 1920 <button onClick={() => addRemoveCourse('MATH 1920', 'math')} disabled={mathCompleted.includes('MATH 2940')}>Add/Remove Course</button>(or equivalent AP/IB/GCE or CASE exam credit)<br />
          MATH 2210 <button onClick={() => addRemoveCourse('MATH 2210', 'math')} disabled={mathCompleted.includes('MATH 2310') || mathCompleted.includes('MATH 2940')}>Add/Remove Course</button> 
          OR MATH 2310 <button onClick={() => addRemoveCourse('MATH 2310', 'math')} disabled={mathCompleted.includes('MATH 2210') || mathCompleted.includes('MATH 2940')}>Add/Remove Course</button>
          OR MATH 2940 <button onClick={() => addRemoveCourse('MATH 2940', 'math')} disabled={mathCompleted.includes('MATH 2210') || mathCompleted.includes('MATH 2310')}>Add/Remove Course</button></p>
          <h4>Additional Math Courses (may be required/recommended for some upper-level courses)</h4>
          <ul>
            <li>MATH 2220 <button onClick={() => addRemoveCourse('MATH 2220', 'math')} disabled={!(linAlg.some(course => allCompleted.includes(course))) || allCompleted.includes('MATH 1920') || allCompleted.includes('MATH 2240')}>Add/Remove Course</button></li>
              Add/Remove Course
          </ul>
          <Link to="/mathCourses">
            <button>See Course Descriptions</button>
          </Link>
        </div>
      </section>
      <section id="next-steps-2">
        <div id="cs-core-courses">
          <h2>Computer Science Core</h2>
          <h3>Completed: {coreCompleted.join(', ')}</h3>
          <h3>{coreCompleted.length >= 5 ? 'All requirements met' : 'Additional courses required'}</h3>
          <p style={{ color: '#ffffff' }}>Students must complete the following:<br />
          CS 3110 <button onClick={() => addRemoveCourse('CS 3110', 'core')} disabled={!(introCSCompleted.includes('CS 211X'))}>Add/Remove Course</button><br />
          CS 3410 <button onClick={() => addRemoveCourse('CS 3410', 'core')} disabled={!(introCSCompleted.includes('CS 211X'))}>Add/Remove Course</button> OR CS 3420 <button onClick={() => addRemoveCourse('CS 3420', 'core')}>Add/Remove Course</button><br />
          CS 3700 <button onClick={() => addRemoveCourse('CS 3700', 'core')} disabled={!(introCS.every(course => allCompleted.includes(course)))}>Add/Remove Course</button> 
          OR CS 3780 <button onClick={() => addRemoveCourse('CS 3780', 'core')} disabled={!(introCSCompleted.includes('CS 211X') && linAlg.some(course => allCompleted.includes(course)) 
          && calculus.some(course => allCompleted.includes(course)) && statsProb.some(course => allCompleted.includes(course)))}>
            Add/Remove Course
          </button><br />
          CS 4410 <button onClick={() => addRemoveCourse('CS 4410', 'core')} disabled={!(coreCompleted.includes('CS 3410') || coreCompleted.includes('CS 3420'))}>Add/Remove Course</button> 
          OR CS 4414 <button onClick={() => addRemoveCourse('CS 4414', 'core')} disabled={!(coreCompleted.includes('CS 3410'))}>Add/Remove Course</button><br />
          CS 4820 <button onClick={() => addRemoveCourse('CS 4820', 'core')} disabled={!(introCS.every(course => allCompleted.includes(course)) 
          && coreCompleted.includes('CS 3110'))}>Add/Remove Course</button></p>
          <Link to="/csCore">
            <button>See Course Descriptions</button>
          </Link>
        </div>
        <div id="cs-electives">
          <h2>Computer Science Electives</h2>
          <h3>Completed: {electivesCompleted.join(', ')}</h3>
          <h3>{electivesCompleted.length >= 2 ? 'All requirements met' : 'Additional courses required'}</h3>
          <p style={{ color: '#ffffff' }}>Students must complete two 4000+ level CS electives
            from the list below (can change semester to semester):</p>
            <ul>
              <li>CS 3700 <button onClick={() => addRemoveCourse('CS 3700', 'electives')} 
              disabled={coreCompleted.includes('CS 3700') || !(introCS.every(course => allCompleted.includes(course)))}>
                Add/Remove Course
              </button> OR CS 3780 (if not taken as a core course) <button onClick={() => addRemoveCourse('CS 3780', 'electives')} 
              disabled={coreCompleted.includes('CS 3780') || !(linAlg.some(course => allCompleted.includes(course)) 
              && calculus.some(course => allCompleted.includes(course)) && statsProb.some(course => allCompleted.includes(course)))}>
                Add/Remove Course
              </button></li>
              <li>CS 4210 <button onClick={() => addRemoveCourse('CS 4210', 'electives')} 
              disabled={!(linAlg.some(course => allCompleted.includes(course)) && multivarCalc.some(course => allCompleted.includes(course)))}>
                Add/Remove Course
              </button></li>
              <li>CS 4320 <button onClick={() => addRemoveCourse('CS 4320', 'electives')} 
              disabled={!(introCS.every(course => allCompleted.includes(course)))}>
                Add/Remove Course
              </button></li>
              <li>CS 4420 <button onClick={() => addRemoveCourse('CS 4420', 'electives')} 
              disabled={!(allCompleted.includes('CS 3410') || allCompleted.includes('CS 3420'))}>
                Add/Remove Course
              </button></li>
              <li>CS 4620 <button onClick={() => addRemoveCourse('CS 4620', 'electives')} 
              disabled={!(allCompleted.includes('CS 211X') && linAlg.some(course => allCompleted.includes(course)))}>
                Add/Remove Course
              </button></li>
              <li>CS 4744 <button onClick={() => addRemoveCourse('CS 4744', 'electives')} 
              disabled={!(allCompleted.includes('CS 2800') && allCompleted.includes('CS 1133'))}>
                Add/Remove Course
              </button></li>
              <li>CS 4750 <button onClick={() => addRemoveCourse('CS 4750', 'electives')} 
              disabled={!(introCS.every(course => allCompleted.includes(course)) && multivarCalc.some(course => allCompleted.includes(course)) 
              && linAlg.some(course => allCompleted.includes(course)))}>
                Add/Remove Course
              </button></li>
              <li>CS 4787 <button onClick={() => addRemoveCourse('CS 4787', 'electives')} 
              disabled={!(allCompleted.includes('CS 211X') && allCompleted.includes('CS 3780'))}>
                Add/Remove Course
              </button></li>
              <li>CS 4789 <button onClick={() => addRemoveCourse('CS 4789', 'electives')} 
              disabled={!(allCompleted.includes('CS 3780'))}>
                Add/Remove Course
              </button></li>
              <li>CS 4814 <button onClick={() => addRemoveCourse('CS 4814', 'electives')} 
              disabled={!(allCompleted.includes('CS 4820'))}>
                Add/Remove Course
              </button></li>
              <li>Other (see current Class Roster and/or consult with your advisor) 
                <button onClick={() => addRemoveCourse('CS 4000+', 'electives')}>Add/Remove Course</button></li>
            </ul>
          <h3>NOTE: CS 4090, CS 4997, CS 4998, CS 4999 cannot be used for this requirement.</h3>
          <Link to="/csElectives">
            <button>See Course Descriptions</button>
          </Link>
        </div>
      </section>
      <section id="next-steps-3">
        <div id="cs-practicum-project">
          <h2>CS Practicum/Project</h2>
          <h3>Completed: {practicumCompleted.join(', ')}</h3>
          <h3>{practicumCompleted.length >= 1 ? 'All requirements met' : 'Additional courses required'}</h3>
          <p style={{ color: '#ffffff' }}>Students must complete one of the following:</p>
          <ul>
            <li>CS 3152 <button onClick={() => addRemoveCourse('CS 3152', 'practicum')} 
              disabled={!(allCompleted.includes('CS 211X'))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 3152 must be taken alongside ENGRC 3152</p>
            </li>
            <li>CS 4121 <button onClick={() => addRemoveCourse('CS 4121', 'practicum')} 
              disabled={!(allCompleted.includes('CS 3110') && (allCompleted.includes('CS 3410') || allCompleted.includes('CS 3420')))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 4121 must be taken alongside CS 4120 (Introduction to Compilers)</p>
            </li>
            <li>CS 4152 <button onClick={() => addRemoveCourse('CS 4152', 'practicum')} 
              disabled={!(allCompleted.includes('CS 3152') && (allCompleted.includes('CS 3300') || allCompleted.includes('CS 3700')
                || allCompleted.includes('CS 4620') || allCompleted.includes('CS 5414')))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 4152 must be taken alongside ENGRC 4152</p>
            </li>
            <li>CS 4321 <button onClick={() => addRemoveCourse('CS 4321', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4320') || allCompleted.includes('CS 5320'))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 4321 can also be taken alongside CS 4320 or CS 5320. 
              If this is the case, then you must add one of the two to your Completed list.</p>
            </li>
            <li>CS 4411 <button onClick={() => addRemoveCourse('CS 4411', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4410'))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 4411 must be taken alongside CS 4410. 
                Add CS 4410 to your Completed list if not done already.</p>
            </li>
            <li>CS 4621 <button onClick={() => addRemoveCourse('CS 4621', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4620'))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 4621 can also be taken concurrently with CS 4620. 
              If this is the case, then you must add CS 4620 to your Completed list.</p>
            </li>
            <li>CS 4701 <button onClick={() => addRemoveCourse('CS 4701', 'practicum')} 
              disabled={!(aiml.some(c => allCompleted.includes(c)))}>
                Add/Remove Course
              </button></li>
            <li>CS 4740 <button onClick={() => addRemoveCourse('CS 4740', 'practicum')}>
                Add/Remove Course
              </button>
              <p>NOTE: Although CS 4740 does not have official prerequisites, it is highly recommended that 
              students take CS 2110, CS 3110, linear algebra, and calculus before taking this course.</p>
            </li>
            <li>CS 5121 <button onClick={() => addRemoveCourse('CS 5121', 'practicum')}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 5121 must be taken alongside CS 5120.</p>
            </li>
            <li>CS 5150 <button onClick={() => addRemoveCourse('CS 5150', 'practicum')} 
              disabled={!(allCompleted.includes('CS 211X'))}>
                Add/Remove Course
              </button></li>
            <li>CS 5152 <button onClick={() => addRemoveCourse('CS 5152', 'practicum')} 
              disabled={!(allCompleted.includes('CS 3152') && (allCompleted.includes('CS 3300') || allCompleted.includes('CS 3700')
                || allCompleted.includes('CS 4620') || allCompleted.includes('CS 5414')))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 5152 must be taken alongside ENGRC 5152.</p>
            </li>
            <li>CS 5321 <button onClick={() => addRemoveCourse('CS 5321', 'practicum')} 
              disabled={!(allCompleted.includes('CS 5320'))}>
                Add/Remove Course
              </button>
              <p>CS 5321 can also be taken concurrently with CS 5320. 
              If this is the case, then you must add CS 5320 to your Completed list.</p>
            </li>
            <li>CS 5411 <button onClick={() => addRemoveCourse('CS 5411', 'practicum')}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 5411 must be taken alongside CS 5410.</p>
            </li>
            <li>CS 5412 <button onClick={() => addRemoveCourse('CS 5412', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4410'))}>
                Add/Remove Course
              </button></li>
            <li>CS 5414 <button onClick={() => addRemoveCourse('CS 5414', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4410'))}>
                Add/Remove Course
              </button></li>
            <li>CS 5621 <button onClick={() => addRemoveCourse('CS 5621', 'practicum')} 
              disabled={!(allCompleted.includes('CS 5620'))}>
                Add/Remove Course
              </button>
              <p>NOTE: CS 5621 can also be taken concurrently with CS 5620. 
              If so, then you must add CS 5620 to your Completed list.</p>
            </li>
            <li>CS 5625 <button onClick={() => addRemoveCourse('CS 5625', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4620') || allCompleted.includes('CS 5620'))}>
                Add/Remove Course
              </button></li>
            <li>CS 5643 <button onClick={() => addRemoveCourse('CS 5643', 'practicum')} 
              disabled={!(allCompleted.includes('CS 4620') && calculus.some(c => allCompleted.includes(c)) 
                         && linalg.some(c => allCompleted.includes(c)) && introPhysics.some(c => allCompleted.includes(c)))}>
                Add/Remove Course
              </button></li>
            <li>CS 5740 <button onClick={() => addRemoveCourse('CS 5740', 'practicum')}>
                Add/Remove Course
              </button>
              <p>NOTE: Although CS 5740 does not have official prerequisites, it is highly recommended that 
              students take CS 2110, CS 3110, linear algebra, and calculus before taking this course.</p>
            </li>
          </ul>
          <Link to="/csPracticumProject">
            <button>See Course Descriptions</button>
          </Link>
        </div>
        <div id="technical-electives">
          <h2>Technical Electives</h2>
          <ul>
            {technicalElectivesCompleted.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
        <div id="external-spec">
          <h2>External Specializations</h2>
          <ul>
            {externalSpecCompleted.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="footer">
        <div id="feedback-form">
          <form>
            <h2>Any feedback? Enter your comments in the text box below</h2>
            <textarea rows="4" cols="50" placeholder="Your comments..."></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}
