import { useState } from 'react'
import './App.css'

function App() {
  const [selected, setSelcted] = useState(null);

  function toggle(i) {
    if (selected == i) {
      return setSelcted(null)
    }

    setSelcted(i)
  }

  return (
    <div className='wrapper'>
      <div className="accordion">
        {
          data.map((item, i) => (
            <div key={i} className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2 >{item.question}</h2>
                <span>{selected == i ? '-' : '+'}</span>
              </div>
              <div className={selected == i ? 'show' : 'dont'}>
                {item.answer}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const data = [
  {
    question: 'Question 1',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Beatae architecto in officiis sequi esse iste! Quasi fuga vel officia ullam culpa repellat obcaecati nostrum molestiae laboriosam beatae, ducimus ratione cumque perspiciatis tempora quidem fugiat modi, molestias necessitatibus ab similique esse quas assumenda quo eius.Eius recusandae voluptate asperiores labore inventore maiores.Exercitationem, quisquam optio.Dicta, ea harum nulla quaerat laudantium, assumenda obcaecati dolorem explicabo, nam eius aliquid? Animi quidem dolorem ut sed sequi quibusdam veritatis.Nihil totam eaque sed dolorem rem, aliquid velit nesciunt ex quia quae eos similique porro, eveniet nam veniam at, libero autem tempora! Aliquid, accusamus unde!"
  },

  {
    question: 'Question 2',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Beatae architecto in officiis sequi esse iste! Quasi fuga vel officia ullam culpa repellat obcaecati nostrum molestiae laboriosam beatae, ducimus ratione cumque perspiciatis tempora quidem fugiat modi, molestias necessitatibus ab similique esse quas assumenda quo eius.Eius recusandae voluptate asperiores labore inventore maiores.Exercitationem, quisquam optio.Dicta, ea harum nulla quaerat laudantium, assumenda obcaecati dolorem explicabo, nam eius aliquid? Animi quidem dolorem ut sed sequi quibusdam veritatis.Nihil totam eaque sed dolorem rem, aliquid velit nesciunt ex quia quae eos similique porro, eveniet nam veniam at, libero autem tempora! Aliquid, accusamus unde!"
  },

  {
    question: 'Question 3',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Beatae architecto in officiis sequi esse iste! Quasi fuga vel officia ullam culpa repellat obcaecati nostrum molestiae laboriosam beatae, ducimus ratione cumque perspiciatis tempora quidem fugiat modi, molestias necessitatibus ab similique esse quas assumenda quo eius.Eius recusandae voluptate asperiores labore inventore maiores.Exercitationem, quisquam optio.Dicta, ea harum nulla quaerat laudantium, assumenda obcaecati dolorem explicabo, nam eius aliquid? Animi quidem dolorem ut sed sequi quibusdam veritatis.Nihil totam eaque sed dolorem rem, aliquid velit nesciunt ex quia quae eos similique porro, eveniet nam veniam at, libero autem tempora! Aliquid, accusamus unde!"
  },

  {
    question: 'Question 4',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Beatae architecto in officiis sequi esse iste! Quasi fuga vel officia ullam culpa repellat obcaecati nostrum molestiae laboriosam beatae, ducimus ratione cumque perspiciatis tempora quidem fugiat modi, molestias necessitatibus ab similique esse quas assumenda quo eius.Eius recusandae voluptate asperiores labore inventore maiores.Exercitationem, quisquam optio.Dicta, ea harum nulla quaerat laudantium, assumenda obcaecati dolorem explicabo, nam eius aliquid? Animi quidem dolorem ut sed sequi quibusdam veritatis.Nihil totam eaque sed dolorem rem, aliquid velit nesciunt ex quia quae eos similique porro, eveniet nam veniam at, libero autem tempora! Aliquid, accusamus unde!"
  },
]

export default App
