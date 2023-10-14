import { useEffect, useState } from 'react';
import contents from '../tnc.json'

const Tnc = () => {
	const [isLoadingWords, setIsLoadingWords] = useState(true);
	const [totalPages, setTotalPages] = useState(-1);
	const [currentPage, setCurrentPage] = useState(-1);
	const [sentences, setSentences] = useState([]);
	const [answers, setAnswers] = useState([
		{
			value: "",
			questionIndex: -1,
		},
		{
			value: "",
			questionIndex: -1,
		},
		{
			value: "",
			questionIndex: -1,
		}
	])
	const [questions, setQuestions] = useState([]);
	const [hoverFlag, setHoverFlag] = useState(false);

	// reads from json and seperates them into sentences
	useEffect(() => {
		let longString = contents.text;
		let _sentences = longString.split(/\. /);

		setSentences(_sentences);
		setTotalPages(_sentences.length);
		setCurrentPage(0);
		setIsLoadingWords(false);
	}, [])

	// generates questions
	useEffect(() => {
		setQuestions(getRandomQuestions(3, contents.quiz))
	}, [currentPage])
	

	// handle page switch
	const PAGE_LEFT = 0;
	const PAGE_RIGHT = 1;

	const handlePageSwitch = (direction) => {
		if (direction === PAGE_LEFT && currentPage > 0)
			setCurrentPage(currentPage - 1)
		else if (direction === PAGE_RIGHT && currentPage < totalPages - 1)
			setCurrentPage(currentPage + 1)
	}

	// get random questions
	const getRandomQuestions = (number, array) => {
		let arrayCopy = [...array];
		let selectedElements = [];

		for(let i = 0; i < number; i++) {
			let randIndex = Math.floor(Math.random() * arrayCopy.length);
			let selectedElement = arrayCopy.splice(randIndex, 1)[0];
			selectedElements.push(selectedElement);
		}

		return selectedElements;
	}

	// handles answers
	const handleAnswers = (value, questionIndex, answerIndex) => {
		const answersCopy = [...answers]
		answersCopy[answerIndex].value = value;
		answersCopy[answerIndex].questionIndex = questionIndex;
		setAnswers(answersCopy)
	}

	// validates answers
	const validateAnswers = () => {
		for (let index = 0; index < answers.length; index++) {
			const answer = answers[index];
			if (answer.value !== contents.quiz[answer.questionIndex].answer)
				return false;
		}
		return true;
	}

	return ( 
		<div style={{padding:'10px'}}>
			<h1 onClick={() => setCurrentPage(totalPages - 2)}>Terms and conditions</h1>

			{/* TNC Content */}
			<div>
				{
					isLoadingWords ? 'Loading...' :
					sentences[currentPage]
				}
			</div>

			{/* Page coutner */}
			<div style={{paddingTop:'100px'}}>
				<button onClick={() => handlePageSwitch(PAGE_LEFT)}>⬅️</button>
					{currentPage + 1} / {totalPages }
				<button onClick={() => handlePageSwitch(PAGE_RIGHT)}>➡️</button>
			</div>

			{/* Questions */}
			<div style={{paddingTop:'10px', minHeight: '100px'}}>
			{
				currentPage === totalPages - 1 ? 
				questions.map((quizContent, index) => <div key={index} style={{paddingTop:'5px'}}>
					{quizContent.question} : 
					<input value={answers[index].value} onChange={(e) => handleAnswers(e.target.value, quizContent.index, index)}/>
				</div>)
				: null
			}
			</div>

			{/* Buttons */}
			<div style={{
				display: 'flex',
				justifyContent: 'center'
			}}>
				<div
				onMouseEnter={() => setHoverFlag(true)}
				onMouseLeave={() => setHoverFlag(false)}
				>
					<div>
					<button
						disabled = {currentPage < totalPages - 1}
						onClick={() => {
							alert("you clicked cancel btw")
							setCurrentPage(0)
						}}
						>
							{hoverFlag ? 'cancel' : 'submit'}
						</button>
					</div>

					<div>
						<button
						disabled = {currentPage < totalPages - 1}
						onClick={() => {
							if (validateAnswers())
								return alert("yes")
							alert("no")
						}}
						>
							{hoverFlag ? 'submit' : 'cancel'}
						</button>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default Tnc;