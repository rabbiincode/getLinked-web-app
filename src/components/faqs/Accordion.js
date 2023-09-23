import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import './_accordion.scss'

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const AccordionToggle = () => {
  const contents = [
    {
      question: 'Can I work on a project I started before the hackathon?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      question: 'What happens if I need help during the hackathon?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      question: 'Can I join a team or do I have to come with one?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      question: 'What happens after the hackathon ends',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      question: 'Can I work on a project I started before the hackathon?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ]

  return (
    <Accordion defaultActiveKey="0">
      {
        contents.map((content, index) => (
          <Card className='card' key={index}>
            <Card.Header>
              <CustomToggle eventKey="0">
                <div className='question'>
                  <span>{content.question}</span>
                  <img src='/images/body/add.png' alt='img'/>
                </div>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{content.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))
      }
    </Accordion>
  );
}

export default AccordionToggle