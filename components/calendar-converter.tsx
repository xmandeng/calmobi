'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

export function CalendarConverterComponent() {
  const [rawText, setRawText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawText(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the submission to your backend
    console.log('Submitted:', { rawText, file })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="bg-black text-white rounded-full p-4 inline-block">
            <Calendar className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-black">Calmobi</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter text or upload a file to convert into a calendar invite
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-xl shadow-lg bg-gray-50 p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="raw-text" className="text-sm font-medium text-gray-700">
                Raw Text
              </Label>
              <Textarea
                id="raw-text"
                name="raw-text"
                placeholder="Paste your text here"
                value={rawText}
                onChange={handleTextChange}
                className="min-h-[100px] rounded-lg border-gray-300 focus:border-black focus:ring-black"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-upload" className="text-sm font-medium text-gray-700">
                Upload File
              </Label>
              <div 
                className="cursor-pointer flex items-center justify-between w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                onClick={handleFileClick}
              >
                <span>{file ? file.name : "No file selected"}</span>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFileClick()
                  }}
                >
                  Choose File
                </Button>
                <Input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
            >
              Convert
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
