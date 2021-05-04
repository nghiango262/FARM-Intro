import "antd/dist/antd.css"

import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { Col, Row, Timeline } from "antd"
import { useEffect, useState } from "react"
import moment from "moment"

function Taskline() {
    const [tasks, setTasks] = useState([])
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        const fetchAllTasks = async () => {
            const response = await fetch("http://localhost:8000/task/")
            const fetchedTasks = await response.json()
            const sortedTasks = fetchedTasks.sort(function(a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1; //nameA comes first
                }
                if (nameA > nameB) {
                  return 1; // nameB comes first
                }
                return 0;  // names must be equal
              });
            setTasks(sortedTasks)
        }

        const interval = setInterval(fetchAllTasks, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        const timelineItems = tasks.map((task) => {
            const onTaskClick = () => {
                alert(task.name + ' clicked!')
            }
            return task.completed ? (
                <Timeline.Item
                    dot={<CheckCircleOutlined style={{ fontSize: '24px' }}/>}
                    label={<p className="px-2">{moment(new Date(task.update_at)).format("HH:mm")}</p>}
                    color="green"
                    style={{ textDecoration: "line-through", color: "green" }}
                >
                    <div 
                        onClick={onTaskClick}
                        className="mx-4 bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-md border-2 | cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500"
                    >
                        <h2>{task.name}</h2>
                        <small>({task.description})</small>
                    </div>
                    
                </Timeline.Item>
            ) : (
                <Timeline.Item
                    dot={<MinusCircleOutlined style={{ fontSize: '24px' }} />}
                    color="blue"
                    label={<p className="px-2">{moment(new Date(task.update_at)).format("HH:mm")}</p>}
                    style={{ textDecoration: "initial" }}
                >
                    <div 
                        onClick={onTaskClick}
                        className="mx-4 bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-xl border-2 | cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                        <h2>{task.name}</h2>
                        <small>({task.description})</small>
                    </div>
                    
                </Timeline.Item>
            )
        })

        setTimeline(timelineItems)
    }, [tasks])

    return (
        <>
            <div className="text-center p-8 text-2xl">
                <h3 className="">MY TASKs</h3>
            </div>
            <Row style={{ marginTop: 50 }}>
                <Col span={14} offset={5}>
                    <Timeline mode="alternate">{timeline}</Timeline>
                </Col>
            </Row>
        </>
    )
}

export default Taskline;
