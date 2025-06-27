"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X, FileImage } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface DesignUploaderProps {
  onUpload: (file: File, previewUrl: string) => void
}

export function DesignUploader({ onUpload }: DesignUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setPreview(result)
        setFileName(file.name)
        onUpload(file, result)
      }
      reader.readAsDataURL(file)
    },
    [onUpload]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".svg"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
  })

  const clearUpload = () => {
    setPreview(null)
    setFileName(null)
  }

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {!preview ? (
          <div {...getRootProps()}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                isDragActive
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/25 hover:border-primary"
            )}
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg font-medium mb-2">
              {isDragActive
                ? "Drop your design here"
                : "Drag & drop your design here"}
            </p>
            <p className="text-sm text-muted-foreground">
              or click to browse files
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Supports PNG, JPG, SVG, PDF (max 10MB)
            </p>
          </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden bg-muted/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FileImage className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">{fileName}</p>
                    <p className="text-sm text-muted-foreground">
                      Design uploaded successfully
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearUpload}
                  className="hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {preview && (
                <div className="relative aspect-square w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-white">
                  <img
                    src={preview}
                    alt="Design preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={clearUpload}
            >
              Upload Different Design
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}