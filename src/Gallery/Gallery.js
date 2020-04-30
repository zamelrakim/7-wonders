import React from 'react'

export default function Gallery(props) {
  return (
    <div>
      {props.plans && props.plans.map((plan, idx) => {
        return (
          <div key={plan.name + idx}>
            <p>{plan.name}</p>
          </div>
        )
      })}
      {!props.plans && <p>There Are No Plans At The Moment.</p>}
    </div>
  )
}