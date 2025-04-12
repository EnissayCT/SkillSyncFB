import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PDFUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFiles = (newFiles) => {
    const pdfFiles = Array.from(newFiles).filter(file => file.type === "application/pdf");
    setFiles(prev => [...prev, ...pdfFiles]);
  };

  const handleFileUpload = (event) => {
    handleFiles(event.target.files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div className="max-w-md mx-auto mt-10 py-8">
      <h2 className="text-xl font-semibold mb-4">Upload PDF Files</h2>
      <div className="p-4 border-2 border-dashed border-gray-400 rounded-lg text-center"
           onDrop={handleDrop} 
           onDragOver={(e) => e.preventDefault()}>
        <p className="mb-2">Drag & drop your PDFs here</p>
        <input 
          type="file" 
          accept="application/pdf" 
          multiple 
          className="hidden" 
          id="fileInput" 
          onChange={handleFileUpload} 
        />
        <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
          Select PDFs
        </label>
        <ul className="mt-3">
          {files.map((file, index) => (
            <li key={index} className="text-sm text-gray-700">{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function CandidateCriteriaForm() {
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [schools, setSchools] = useState([]);
  const [inputSchool, setInputSchool] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [inputKeyword, setInputKeyword] = useState("");
  const [experience, setExperience] = useState(0);
  const [ageRange, setAgeRange] = useState([18, 35]);

  const addItem = (list, setList, input, setInput) => {
    if (input.trim() && !list.includes(input)) {
      setList([...list, input]);
      setInput("");
    }
  };

  const handleKeyPress = (e, list, setList, input, setInput) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(list, setList, input, setInput);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-md rounded-lg bg-white border">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Candidate Criteria</h2>

        {/* Skills Input */}
        <div>
          <label className="text-sm font-medium text-gray-600">Skills</label>
          <div className="flex gap-2 mt-2">
            <Input
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, skills, setSkills, inputSkill, setInputSkill)}
              placeholder="Type a skill & press Enter"
            />
            <Button onClick={() => addItem(skills, setSkills, inputSkill, setInputSkill)} variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education Level */}
        <div>
          <label className="text-sm font-medium text-gray-600">Education Level</label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="baccalaureat">Baccalauréat</SelectItem>
              <SelectItem value="bac+2">Bac+2 (DUT, BTS)</SelectItem>
              <SelectItem value="bac+3">Bac+3 (Licence)</SelectItem>
              <SelectItem value="bac+5">Bac+5 (Master, Ingénieur)</SelectItem>
              <SelectItem value="doctorat">Doctorat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Years of Experience */}
        <div>
          <label className="text-sm font-medium text-gray-600">Years of Experience</label>
          <Input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            min="0"
            className="mt-1"
          />
        </div>

        {/* Age Range */}
        <div>
          <label className="text-sm font-medium text-gray-600">Age Range</label>
          <div className="py-2">
            <Slider
              defaultValue={ageRange}
              min={18}
              max={65}
              step={1}
              onValueChange={(val) => setAgeRange(val)}
              className="w-full bg-gray-300 h-2 rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-1">
              From {ageRange[0]} to {ageRange[1]} years old
            </p>
          </div>
        </div>

        {/* Preferred Schools */}
        <div>
          <label className="text-sm font-medium text-gray-600">Preferred Attended Schools</label>
          <div className="flex gap-2 mt-2">
            <Input
              value={inputSchool}
              onChange={(e) => setInputSchool(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, schools, setSchools, inputSchool, setInputSchool)}
              placeholder="Type a school & press Enter"
            />
            <Button onClick={() => addItem(schools, setSchools, inputSchool, setInputSchool)} variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {schools.map((school, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {school}
              </span>
            ))}
          </div>
        </div>

        {/* Keywords in Bio */}
        <div>
          <label className="text-sm font-medium text-gray-600">Key Words in Bio</label>
          <div className="flex gap-2 mt-2">
            <Input
              value={inputKeyword}
              onChange={(e) => setInputKeyword(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, keywords, setKeywords, inputKeyword, setInputKeyword)}
              placeholder="Type a keyword & press Enter"
            />
            <Button onClick={() => addItem(keywords, setKeywords, inputKeyword, setInputKeyword)} variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {keywords.map((keyword, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>


      </CardContent>
    </Card>
  );
}

const CriteriaPage = () => {
  return (
    <div className="py-10">
      <PDFUploader />
      <CandidateCriteriaForm />
      <div className="flex justify-center mt-4">
        <Button className="px-24 py-8 text-lg" variant="outline">Continue</Button>
      </div>
    </div>
  );
};

export default CriteriaPage;
