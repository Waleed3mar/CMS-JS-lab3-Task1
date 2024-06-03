let t = document.getElementById('t0');
let a_btn = document.getElementById('a-btn');
let tasks = document.getElementsByClassName('tasks');



//todo RegExep to check the inputs
let value_format = /[^\s]$/


a_btn.addEventListener('click', addTask);

function addTask() {
	if (!t.value.match(value_format)) {
		alert("Task can't end with space or be empty!")
		t.value = "";
	} else {
		let task = document.createElement("div");
		task.classList.add("sngl-task");

		let d_btn = document.createElement("button");
		d_btn.classList.add("dlt-btn");
		d_btn.innerText = "Delete";

		let ok_btn = document.createElement("button");
		ok_btn.classList.add("ok-btn");
		ok_btn.innerText = "Done";

		let task_c = document.createElement("h3");
		task_c.classList.add("task-content")
		task_c.innerText = t.value;

		task.appendChild(task_c);
		task.appendChild(ok_btn);
		task.appendChild(d_btn);
		tasks[0].appendChild(task)

		d_btn.addEventListener('click', function () {
			d_btn.parentElement.remove();
		})

		ok_btn.addEventListener('click', function () {
			ok_btn.parentElement.classList.toggle("done")
			task_c.classList.toggle("done")
			ok_btn.classList.toggle("btn-done")

		})
		t.value = "";
	}
}