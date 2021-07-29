import React, {useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import RightSide from './RightSide'
import Navbar from './Navbar'

const listCards = [
  {
    id: 'cart1',
    title: 'Problem',
    subtitle: 'view builder',
    select: false
  },
  {
    id: 'cart2',
    title: 'Solution',
    subtitle: 'view builder',
    select: false
  },
  {
    id:'cart3',
    title: 'Ecosystem',
    subtitle: 'view builder',
    select: false
  },
  {
    id: 'cart4',
    title: 'Team',
    subtitle: 'view builder',
    select: false
  },
  {
    id: 'cart5',
    title: 'Results',
    subtitle: 'view builder',
    select: false
  }
]

const LeftSidebar = () => {
  const [lists, updateLists] = useState(listCards)
  function handleOnDragEnd(result){
    //Check the destination object does not exist
    if (!result.destination) return;
    //console.log(result);
    
    const items = Array.from(lists);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateLists(items);
  }
  return (
    <div>
      <div class="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* First grid column */}
        <div class="w-full hidden md:block">
          <Navbar />
        </div>
        {/* End of first grid column */}

        {/* Second grid column */}
        <div class="bg-gray-100 h-full">
          <div class="mx-5 my-10">
            <h1 class="text-2xl text-black">Social innovation</h1>
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" onChange={(e) => {
                  let  checked=e.target.checked;
                  updateLists(listCards.map((d) => {
                    d.select=checked;
                    return d;
                  }))
                  
                }} class="form-checkbox h-5 w-5 text-gray-600"/>
                <span class="ml-2 text-gray-700">
                  Select All
                </span>
            </label>
            <div class="overflow-y-scroll hide-scroll-bar">
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                      {listCards.map(({id, title, subtitle, select}, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                <div class="flex flex-col my-5">
                                  <div class="bg-white shadow-md rounded-3xl p-4">
                                    <div class="flex-none lg:flex">
                                      <label class="inline-flex items-center mr-5">
                                        {/* <p class="mx-2"></p> */}
                                        <input onChange={(event) => {
                                          let checked=event.target.checked;
                                          updateLists(listCards.map((data) => {
                                            if(id === data.id) {
                                              data.select= checked;
                                            }
                                            return data;
                                          }));
                                        }}  
                                          type="checkbox" checked={select}  class="form-checkbox h-6 w-6 text-gray-600" /><span class="ml-2 text-gray-700"></span>
                                      </label>
                                      <div class="flex-auto ml-3 justify-evenly py-2">
                                        <div class="flex flex-wrap">
                                          <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                            {title}
                                          </div>
                                          <p class="flex-auto text-lg font-medium">{subtitle}</p>
                                        </div>
                                      </div>
                                      <div class=" h-full w-full ml-3 lg:h-35 lg:w-35 lg:mb-0 mb-3">
                                        <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                                          alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                                      </div>
                                      <div class="ml-3 flex justify-between bg-white items-center block md:hidden my-2 rounded-md px-2">
                                        <p class="text-sm text-black block md:hidden">Due Date (Optional):</p>
                                        <div class="flex">
                                          <input type="date" placeholder="date...." class="border border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 ring-blue-200" />
                                        </div>
                                        <div class="flex justify-center items-center bg-white my-2 rounded-lg px-2">
                                          <select name="hours" class="bg-transparent text-xl appearance-none outline-none">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">10</option>
                                            <option value="12">12</option>
                                          </select>
                                          <span class="text-xl mr-3">:</span>
                                          <select name="minutes" class="bg-transparent text-xl appearance-none outline-none mr-4">
                                            <option value="0">00</option>
                                            <option value="30">30</option>
                                          </select>
                                          <select name="ampm" class="bg-transparent text-xl appearance-none outline-none">
                                            <option value="am">AM</option>
                                            <option value="pm">PM</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                          )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
              </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>
        {/* End of second grid column */}

        {/* Third grid column */}
        <div class="bg-gray-100">
          <RightSide />
        </div>
        {/* End of third grid column */}
      </div>
    </div>
  )
}

export default LeftSidebar