"use client";

import { useState, useEffect } from "react"
import { CheckCircle, Clock, BookOpen, Video, FileText, Calendar } from "lucide-react"

interface StudyTask {
  id: string
  title: string
  type: "mock" | "video" | "notes"
  duration: number
  completed: boolean
  priority: "high" | "medium" | "low"
}

interface DayPlan {
  day: number
  tasks: StudyTask[]
}

const generateStudyPlan = (totalDays: 30 | 60): DayPlan[] => {
  const plan: DayPlan[] = []

  const taskTemplates = [
    { title: "Quantitative Practice Test", type: "mock" as const, duration: 60, priority: "high" as const },
    { title: "Verbal Reasoning Mock", type: "mock" as const, duration: 45, priority: "high" as const },
    { title: "Algebra Fundamentals", type: "video" as const, duration: 30, priority: "medium" as const },
    { title: "Reading Comprehension", type: "video" as const, duration: 25, priority: "medium" as const },
    { title: "Geometry Notes Review", type: "notes" as const, duration: 20, priority: "low" as const },
    { title: "Vocabulary Building", type: "notes" as const, duration: 15, priority: "medium" as const },
    { title: "Data Interpretation", type: "video" as const, duration: 35, priority: "high" as const },
    { title: "Essay Writing Practice", type: "notes" as const, duration: 40, priority: "medium" as const },
  ]

  for (let day = 1; day <= totalDays; day++) {
    const dayTasks: StudyTask[] = []
    const numTasks = Math.floor(Math.random() * 3) + 2 // 2-4 tasks per day

    for (let i = 0; i < numTasks; i++) {
      const template = taskTemplates[Math.floor(Math.random() * taskTemplates.length)]
      dayTasks.push({
        id: `day-${day}-task-${i}`,
        ...template,
        completed: day <= 5 ? Math.random() > 0.3 : false,
      })
    }

    plan.push({
      day,
      tasks: dayTasks,
    })
  }

  return plan
}

export function StudyPlanner() {
  const [planDuration, setPlanDuration] = useState<30 | 60>(30)
  const [studyPlan, setStudyPlan] = useState<DayPlan[]>([])
  const [selectedDay, setSelectedDay] = useState<number>(1)
  const [mounted, setMounted] = useState(false)

  // Populate on client only to avoid SSR/hydration mismatch from Math.random()
  useEffect(() => {
    setStudyPlan(generateStudyPlan(30))
    setMounted(true)
  }, [])

  const handlePlanDurationChange = (duration: 30 | 60) => {
    setPlanDuration(duration)
    setStudyPlan(generateStudyPlan(duration))
    setSelectedDay(1)
  }

  const toggleTaskCompletion = (taskId: string) => {
    setStudyPlan((prev) =>
      prev.map((dayPlan) => ({
        ...dayPlan,
        tasks: dayPlan.tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
      })),
    )
  }

  const selectedDayPlan = studyPlan.find((dayPlan) => dayPlan.day === selectedDay)
  const totalTasks = studyPlan.reduce((sum, day) => sum + day.tasks.length, 0)
  const completedTasks = studyPlan.reduce((sum, day) => sum + day.tasks.filter((task) => task.completed).length, 0)
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "mock":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "notes":
        return <BookOpen className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  if (!mounted) {
    return (
      <section className="grid grid-cols-2 gap-3">
        <article>
          <div className="flex items-center justify-between mb-3.5">
            <h2 className="mt-4.5 text-[#211C37]">Study Planner</h2>
          </div>
          <div className="mb-4 p-3 bg-[#F5F7FB] rounded-lg border border-[#E5E5E5] animate-pulse h-12" />
          <div className="grid grid-cols-10 gap-1 max-h-[300px] overflow-y-auto">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="p-2 rounded bg-[#F5F7FB] animate-pulse h-10" />
            ))}
          </div>
        </article>
        <article>
          <h2 className="mt-4.5 mb-3.5 text-[#211C37]">Loading tasks...</h2>
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-3 rounded-lg border bg-[#F5F7FB] animate-pulse h-16" />
            ))}
          </div>
        </article>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-2 gap-3">
      {/* Study Planner - Left Side */}
      <article>
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="mt-4.5 text-[#211C37]">Study Planner</h2>
          <div className="flex bg-[#F5F7FB] rounded-lg p-1">
            <button
              onClick={() => handlePlanDurationChange(30)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                planDuration === 30 ? "bg-white text-[#211C37] shadow-sm" : "text-[#85878D] hover:text-[#211C37]"
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => handlePlanDurationChange(60)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                planDuration === 60 ? "bg-white text-[#211C37] shadow-sm" : "text-[#85878D] hover:text-[#211C37]"
              }`}
            >
              2 Months
            </button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mb-4 p-3 bg-[#F5F7FB] rounded-lg border border-[#E5E5E5]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#211C37]">Overall Progress</span>
            <span className="text-xs font-bold text-[#211C37]">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-[#E5E5E5] rounded-full h-1.5">
            <div
              className="bg-[#3BAFA8] h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-[#85878D] mt-1">
            <span>{completedTasks} completed</span>
            <span>{totalTasks - completedTasks} remaining</span>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-10 gap-1 max-h-[300px] overflow-y-auto">
          {studyPlan.map((dayPlan) => {
            const isSelected = dayPlan.day === selectedDay
            const completedCount = dayPlan.tasks.filter((task) => task.completed).length
            const totalCount = dayPlan.tasks.length
            const dayProgress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

            return (
              <button
                key={dayPlan.day}
                onClick={() => setSelectedDay(dayPlan.day)}
                className={`relative p-2 rounded text-xs transition-all hover:scale-105 ${
                  isSelected
                    ? "bg-[#3BAFA8] text-white shadow-lg"
                    : "bg-[#F5F7FB] text-[#211C37] hover:bg-[#E5E5E5] border border-[#E5E5E5]"
                }`}
              >
                <div className="font-medium">Day {dayPlan.day}</div>
                {totalCount > 0 && (
                  <div className="flex justify-center mt-1">
                    <div
                      className={`w-3 h-0.5 rounded-full ${
                        dayProgress === 100
                          ? "bg-green-400"
                          : dayProgress > 0
                            ? "bg-yellow-400"
                            : isSelected
                              ? "bg-white/50"
                              : "bg-[#E5E5E5]"
                      }`}
                    ></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </article>

      {/* Day-wise Todo - Right Side */}
      <article>
        <h2 className="mt-4.5 mb-3.5 text-[#211C37]">Day {selectedDay} Tasks</h2>

        {selectedDayPlan ? (
          <div className="space-y-2 max-h-[350px] overflow-y-auto">
            {selectedDayPlan.tasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 rounded-lg border transition-all hover:shadow-sm ${
                  task.completed ? "bg-green-50 border-green-200" : "bg-[#F5F7FB] border-[#E5E5E5]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className={`mt-0.5 rounded-full p-1 transition-colors ${
                      task.completed
                        ? "bg-[#3BAFA8] text-white"
                        : "bg-[#E5E5E5] text-[#85878D] hover:bg-[#3BAFA8] hover:text-white"
                    }`}
                  >
                    <CheckCircle className="h-3 w-3" />
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-[#85878D]">{getTaskIcon(task.type)}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>

                    <h4
                      className={`text-sm font-medium ${
                        task.completed ? "text-[#3BAFA8] line-through" : "text-[#211C37]"
                      }`}
                    >
                      {task.title}
                    </h4>

                    <div className="flex items-center gap-1 mt-1 text-xs text-[#85878D]">
                      <Clock className="h-3 w-3" />
                      <span>{task.duration} min</span>
                      <span className="ml-2 capitalize">{task.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {selectedDayPlan.tasks.length === 0 && (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-[#E5E5E5] mx-auto mb-3" />
                <p className="text-sm text-[#85878D]">No tasks planned for this day</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-[#E5E5E5] mx-auto mb-3" />
            <p className="text-sm text-[#85878D]">Select a day to view tasks</p>
          </div>
        )}
      </article>
    </section>
  )
}
