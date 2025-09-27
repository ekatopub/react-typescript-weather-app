type ResultProps = {
  results: {
    location: {
      country: string
      name: string
    }
    current: {
      temp_c: string
      condition: {
        text: string
        icon: string
      }
    }
  }
}

const ResultsReact19 = (props: ResultProps) => {
  return (
    <div>{
      props.results.location?.country &&
      <div>
        <div className="result-country"> {props.results.location.country}</div>
        <div className="result-city"> {props.results.location.name}</div>
        <div className="result-temp"> {props.results.current.temp_c}<span>°C</span></div>
        <div className="result-condition"> <img src={props.results.current.condition.icon} alt="icon" />
          <span>{props.results.current.condition.text}</span>
        </div>
      </div>
    }
    </div>

  )
}

export default ResultsReact19