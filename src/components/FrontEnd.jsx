import React, { useState } from 'react';
import { Collapse } from "react-daisyui"

const FrontEnd = () => {
    const [modul, setModul] = useState(0)

    const data = [
        [
            {
                subjectName: "Frontendga kirish1",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish2",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish1",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish2",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish1",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish2",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish1",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish2",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish1",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish2",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
        ],
        [
            {
                subjectName: "Frontendga kirish3",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish4",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
        ],
        [
            {
                subjectName: "Frontendga kirish5",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish6",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
        ],
        [
            {
                subjectName: "Frontendga kirish7",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
            {
                subjectName: "Frontendga kirish8",
                children: [
                    "Mentor va ushbu kursda nimalar oqitilishi haqida qisqacha malumot.",
                    "Frontend dasturchi kimlar bilan ishlaydi?",
                    "Nima uchun frontendni o’rganish kerak?",
                    "Web dasturlash nima? Ishlash prinsiplari."
                ]
            },
        ],
    ]

    return (
        <div className='p-4'>
            <div class="text-2xl tabs tabs-boxed">
                {
                    data.map((course, index) => {
                        return (
                            modul === index ? <span style={{ height: "3rem" }} key={index} class="p-2 px-5 text-2xl tab tab-active text-md">{index + 1}-modul</span> : <span style={{ height: "3rem" }} onClick={() => setModul(index)} key={index} class="text-2xl p-2 px-5 tab">{index + 1}-modul</span>
                        )
                    })
                }
            </div>

            <div className="subjects py-4">
                {
                    data[modul].map((item, index) => {
                        return (
                            <Collapse key={Math.random()} className="py-2" checkbox>
                                <Collapse.Title className="text-2xl bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                    {item.subjectName}
                                </Collapse.Title>
                                <Collapse.Content className="text-lg bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                    {
                                        item.children.map((child) => {
                                            return (
                                                <p className='py-1'>{child}</p>
                                            )
                                        })
                                    }
                                </Collapse.Content>
                            </Collapse>

                        )
                    })
                }



            </div>
        </div>
    );
};

export default FrontEnd;