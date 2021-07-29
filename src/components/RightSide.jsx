import React from 'react'

const RightSide = () => {
  return (
    <div class="mx-5 my-10">
      <h1 class="text-2xl text-black">Due Date (Optional)</h1>
      <div class="flex justify-between bg-gray-200 my-5 rounded-lg px-5">
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
        <div class="flex">
          <input type="date" placeholder="date...." class="border border-gray-300 p-2 my-2 rounded-lg focus:outline-none focus:ring-2 ring-blue-200" />
        </div>
      </div>
      
    </div>
  )
}

export default RightSide