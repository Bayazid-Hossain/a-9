import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [category, setCategory] = useState([])
    const [mark, setMark] = useState([])
    const jobData = async () => {
        const res = await fetch("/featured.json")
        const data = await res.json();
        setCards(data)
    }
    const categoryData = async () => {
        const res = await fetch("/category.json")
        const data = await res.json();
        setCategory(data)
    }
    const assignmentData = async () => {
        const res = await fetch("/public/assignmentMarks.json")
        const data = await res.json();
        setMark(data)
    }

    useEffect(() => {
        jobData()
        categoryData()
        assignmentData()
    }, [])
    const allData ={cards, category, mark}
    return (
        <DataContext.Provider value={allData}>
            {children}
        </DataContext.Provider>
    )
}

const useDataGlobally = () => {
    return useContext(DataContext)
}
export { DataProvider, useDataGlobally }