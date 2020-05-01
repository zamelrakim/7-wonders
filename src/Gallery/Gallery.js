import React from 'react'

export default function Gallery(props) {
  return (
    <div id='plans'>
      {props.plans && props.plans.map((plan, idx) => {
        return (
          <div key={plan.name + idx}>
            <img src={plan.image} alt='attractionImage' />
            <h3>{plan.name}</h3>
            <h4>{plan.country} / {plan.continent}</h4>
            <p>{plan.snippet}</p>
          </div>
        )
      })}
      {!props.plans && <p>There Are No Plans At The Moment.</p>}
    </div>
  )
}