"use client"

import { DesignData } from "@/app/design/page"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface DesignCustomizerProps {
  data: DesignData
  onChange: (updates: Partial<DesignData>) => void
}

export function DesignCustomizer({ data, onChange }: DesignCustomizerProps) {
  return (
    <div className="space-y-6">
      {/* Thickness Selection */}
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Material Thickness
        </Label>
        <RadioGroup
          value={data.thickness}
          onValueChange={(thickness) => onChange({ thickness })}
        >
          <div className="grid grid-cols-2 gap-3">
            {["1/8", "1/4", "3/8", "1/2"].map((thickness) => (
              <div key={thickness} className="flex items-center space-x-2">
                <RadioGroupItem value={thickness} id={thickness} />
                <Label
                  htmlFor={thickness}
                  className="cursor-pointer font-normal"
                >
                  {thickness}" ({(parseFloat(thickness.split("/")[0]) / parseFloat(thickness.split("/")[1]) * 25.4).toFixed(1)}mm)
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Dimensions */}
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Dimensions (inches)
        </Label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="width" className="text-sm mb-1 block">
              Width
            </Label>
            <Input
              id="width"
              type="number"
              min="1"
              max="24"
              value={data.width}
              onChange={(e) => onChange({ width: Number(e.target.value) })}
            />
          </div>
          <div>
            <Label htmlFor="height" className="text-sm mb-1 block">
              Height
            </Label>
            <Input
              id="height"
              type="number"
              min="1"
              max="24"
              value={data.height}
              onChange={(e) => onChange({ height: Number(e.target.value) })}
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Maximum size: 24" x 24"
        </p>
      </div>

      {/* Custom Text */}
      <div>
        <Label htmlFor="customText" className="text-base font-semibold mb-3 block">
          Add Custom Text (Optional)
        </Label>
        <Input
          id="customText"
          placeholder="Enter text to engrave..."
          value={data.customText || ""}
          onChange={(e) => onChange({ customText: e.target.value })}
        />
      </div>

      {/* Quantity */}
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Quantity: {data.quantity}
        </Label>
        <Slider
          value={[data.quantity]}
          onValueChange={([quantity]) => onChange({ quantity })}
          min={1}
          max={20}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  )
}