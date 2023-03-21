import ReactDom from 'react-dom';
import React, { useContext, useState } from 'react'
import EventsContext from '../context/events'

function EditEvent({ id, email, saveEdit }) {

    const { events, editEvent } = useContext(EventsContext)
    console.log(events)
    const eventObj = events.find((event) => {
        return event.id === id
    })

    console.log(eventObj)

    const [name, namechange] = useState(eventObj.name);
    const [date, datechange] = useState(eventObj.date);
    const [desc, descchange] = useState(eventObj.description);
    const [price, pricechange] = useState(eventObj.price);
    const [category, categorychange] = useState(eventObj.category);

    const handleSave = (e) => {
        e.preventDefault()
        namechange("")
        datechange("")
        descchange("")
        pricechange(0)
        categorychange("normal")

        let data = {
            id: Date.now(),
            name: name,
            date: date,
            description: desc,
            price: price,
            category: category,
        }

        editEvent(id, email, data)
        saveEdit()
    }

    const handleClose = () => {
        saveEdit()
    }
    return ReactDom.createPortal(
        <div className="edit_modal-wrapper row">
            <div className="edit_modal-container col-lg-6 col-sm-8 col-xs-12">
                <div className="edit_modal-body">
                    <form onSubmit={handleSave} className="container">
                        <div className="card">
                            <div className="card-header">
                                <div style={{ fontSize: "24px", fontWeight: "500" }}>Edit Event</div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group col-lg-12">
                                            <label for="event_name" className="control-label">Name</label>
                                            <div >
                                                <input
                                                    type="text"
                                                    className="mt-1 form-control" id="event_name"
                                                    name='name'
                                                    onChange={e => namechange(e.target.value)}
                                                    value={name}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-12 mt-2">
                                            <label for="event_date" required className=" control-label">Date</label>
                                            <div >
                                                <input
                                                    type="date"
                                                    className=" mt-1 form-control"
                                                    id="event_date"
                                                    required
                                                    name='date'
                                                    onChange={e => datechange(e.target.value)}
                                                    value={date}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-12 mt-2">
                                            <label for="event_desc" required className="control-label">Description</label>
                                            <div >
                                                {/* <input type="text" className="mt-1 form-control" id="event_desc"
                                            name='desc' /> */}
                                                <textarea class="mt-1 form-control"
                                                    id="event_desc"
                                                    name='desc'
                                                    rows="3"
                                                    onChange={e => descchange(e.target.value)}
                                                    value={desc}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-12 mt-2">
                                            <label for="event_price" className="control-label">Price</label>
                                            <div >
                                                <input
                                                    type="number"
                                                    className="mt-1 form-control"
                                                    id="event_price"
                                                    name='price'
                                                    onChange={e => pricechange(e.target.value)}
                                                    value={price}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 my-3">
                                            <label class="radio-inline me-2">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    id="inlineRadio1"
                                                    value="normal"
                                                    className='me-1'
                                                    checked={category === 'normal'}
                                                    onChange={e => categorychange(e.target.value)}
                                                />Normal
                                            </label>
                                            <label class="radio-inline me-1">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    id="inlineRadio2"
                                                    value="premium"
                                                    className='me-1'
                                                    checked={category === 'premium'}
                                                    onChange={e => categorychange(e.target.value)}
                                                /> Premium
                                            </label>
                                        </div>
                                        <div className="edit_modal-cta">
                                            <button type="submit" className="btn btn-primary me-3">Save</button>
                                            <button type="button" className="btn btn-danger" onClick={handleClose}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>,
        document.querySelector(".editmodal-container")
    )
}

export default EditEvent
