"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Medal, ChevronDown, Search, SlidersHorizontal, ArrowUpDown, Star, MapPin, Briefcase } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


// Sample data
const candidatesData = [
  {
    id: 1,
    name: "Youssef El Amrani",
    matchScore: 98,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["React", "Tailwind", "Node.js", "MongoDB"],
    location: "Rabat",
    experience: 5,
    role: "Développeur Fullstack",
    education: "INPT",
    lastActive: "Aujourd'hui",
  },
  {
    id: 2,
    name: "Sara Bouziane",
    matchScore: 95,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["Python", "Pandas", "Machine Learning", "SQL"],
    location: "Casablanca",
    experience: 4,
    role: "Data Scientist",
    education: "EMI",
    lastActive: "Hier",
  },
  {
    id: 3,
    name: "Omar Benchekroun",
    matchScore: 92,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["JavaScript", "Figma", "UX", "UI"],
    location: "Marrakech",
    experience: 3,
    role: "UI/UX Designer",
    education: "ENSA Marrakech",
    lastActive: "Il y a 2 jours",
  },
  {
    id: 4,
    name: "Khadija Rami",
    matchScore: 89,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["Java", "Spring Boot", "Docker", "SQL"],
    location: "Fès",
    experience: 6,
    role: "Ingénieure Backend",
    education: "ENSIAS",
    lastActive: "Aujourd'hui",
  },
  {
    id: 5,
    name: "Anass El Idrissi",
    matchScore: 87,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["Gestion de produit", "Agilité", "Scrum", "Analyse métier"],
    location: "Tanger",
    experience: 4,
    role: "Product Owner",
    education: "HEM",
    lastActive: "Il y a 3 jours",
  },
  {
    id: 6,
    name: "Imane Loukili",
    matchScore: 85,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["C#", ".NET", "Azure", "SQL Server"],
    location: "Agadir",
    experience: 7,
    role: "Développeuse .NET",
    education: "FST Agadir",
    lastActive: "Hier",
  },
  {
    id: 7,
    name: "Hamza Najib",
    matchScore: 82,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["UX Research", "Wireframing", "Prototypage"],
    location: "Oujda",
    experience: 2,
    role: "Designer UX",
    education: "EST Oujda",
    lastActive: "Aujourd'hui",
  },
  {
    id: 8,
    name: "Fatima Zahra Mouline",
    matchScore: 79,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["DevOps", "Kubernetes", "CI/CD", "Terraform"],
    location: "Kénitra",
    experience: 5,
    role: "Ingénieure DevOps",
    education: "ENSAM Meknès",
    lastActive: "Il y a 4 jours",
  },
  {
    id: 9,
    name: "Ayoub Bennis",
    matchScore: 76,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["SEO", "Marketing digital", "Analytics", "Content"],
    location: "El Jadida",
    experience: 4,
    role: "Spécialiste Marketing Digital",
    education: "Université Chouaib Doukkali",
    lastActive: "Hier",
  },
  {
    id: 10,
    name: "Salma Chaoui",
    matchScore: 74,
    profileImage: "/placeholder.svg?height=100&width=100",
    skills: ["Flutter", "Dart", "Firebase", "UI Mobile"],
    location: "Tétouan",
    experience: 3,
    role: "Développeuse Mobile",
    education: "ENSA Tétouan",
    lastActive: "Aujourd'hui",
  },
];


// Helper function to get initials from name
const getInitials = (name) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

// Helper function to get color based on match score
const getScoreColor = (score) => {
  if (score >= 90) return "bg-gradient-to-r from-emerald-500 to-emerald-600"
  if (score >= 80) return "bg-gradient-to-r from-green-500 to-green-600"
  if (score >= 70) return "bg-gradient-to-r from-yellow-500 to-yellow-600"
  return "bg-gradient-to-r from-orange-500 to-orange-600"
}

// Helper function to get text color based on match score
const getScoreTextColor = (score) => {
  if (score >= 70) return "text-white"
  return "text-white"
}

// Medal component for top 3 candidates
const RankMedal = ({ rank }) => {
  if (rank === 1) {
    return (
      <div className="absolute -left-3 -top-3 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full p-1.5 shadow-lg">
        <Medal className="h-5 w-5 text-white" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="absolute -left-3 -top-3 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full p-1.5 shadow-lg">
        <Medal className="h-5 w-5 text-white" />
      </div>
    )
  }
  if (rank === 3) {
    return (
      <div className="absolute -left-3 -top-3 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full p-1.5 shadow-lg">
        <Medal className="h-5 w-5 text-white" />
      </div>
    )
  }
  return null
}

export default function CandidateLeaderboard() {
  const [candidates, setCandidates] = useState([])
  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("score")
  const [sortDirection, setSortDirection] = useState("desc")
  const [filters, setFilters] = useState({
    minExperience: 0,
    roles: new Set(),
    locations: new Set(),
  })
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState("table")

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setCandidates(candidatesData)
      setFilteredCandidates(candidatesData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Filter and sort candidates
  useEffect(() => {
    let result = [...candidates]

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply experience filter
    if (filters.minExperience > 0) {
      result = result.filter((candidate) => candidate.experience >= filters.minExperience)
    }

    // Apply role filter
    if (filters.roles.size > 0) {
      result = result.filter((candidate) => filters.roles.has(candidate.role))
    }

    // Apply location filter
    if (filters.locations.size > 0) {
      result = result.filter((candidate) => filters.locations.has(candidate.location))
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortOrder === "score") {
        return sortDirection === "desc" ? b.matchScore - a.matchScore : a.matchScore - b.matchScore
      } else {
        return sortDirection === "desc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
      }
    })

    setFilteredCandidates(result)
  }, [candidates, searchQuery, sortOrder, sortDirection, filters])

  // Toggle sort direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "desc" ? "asc" : "desc")
  }

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "score" ? "name" : "score")
  }

  // Toggle role filter
  const toggleRoleFilter = (role) => {
    setFilters((prev) => {
      const newRoles = new Set(prev.roles)
      if (newRoles.has(role)) {
        newRoles.delete(role)
      } else {
        newRoles.add(role)
      }
      return { ...prev, roles: newRoles }
    })
  }

  // Toggle location filter
  const toggleLocationFilter = (location) => {
    setFilters((prev) => {
      const newLocations = new Set(prev.locations)
      if (newLocations.has(location)) {
        newLocations.delete(location)
      } else {
        newLocations.add(location)
      }
      return { ...prev, locations: newLocations }
    })
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSortOrder("score")
    setSortDirection("desc")
    setFilters({
      minExperience: 0,
      roles: new Set(),
      locations: new Set(),
    })
  }

  // Get unique roles for filter
  const uniqueRoles = Array.from(new Set(candidates.map((c) => c.role)))

  // Get unique locations for filter
  const uniqueLocations = Array.from(new Set(candidates.map((c) => c.location)))

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Candidate Leaderboard</h1>
        <p className="text-muted-foreground">
          Ranked by matching score based on job requirements and candidate profiles
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by name or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
                {(filters.minExperience > 0 || filters.roles.size > 0 || filters.locations.size > 0) && (
                  <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                    {filters.minExperience > 0 ? 1 : 0 + filters.roles.size + filters.locations.size}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <div className="p-2">
                <p className="font-medium mb-2">Experience</p>
                <div className="flex gap-2">
                  {[0, 2, 5, 8].map((years) => (
                    <Button
                      key={years}
                      variant={filters.minExperience === years ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilters((prev) => ({ ...prev, minExperience: years }))}
                      className="flex-1"
                    >
                      {years > 0 ? `${years}+ yrs` : "All"}
                    </Button>
                  ))}
                </div>
              </div>

              <DropdownMenuSeparator />

              <div className="p-2">
                <p className="font-medium mb-2">Role</p>
                <div className="max-h-40 overflow-y-auto">
                  {uniqueRoles.map((role) => (
                    <DropdownMenuCheckboxItem
                      key={role}
                      checked={filters.roles.has(role)}
                      onCheckedChange={() => toggleRoleFilter(role)}
                    >
                      {role}
                    </DropdownMenuCheckboxItem>
                  ))}
                </div>
              </div>

              <DropdownMenuSeparator />

              <div className="p-2">
                <p className="font-medium mb-2">Location</p>
                <div className="max-h-40 overflow-y-auto">
                  {uniqueLocations.map((location) => (
                    <DropdownMenuCheckboxItem
                      key={location}
                      checked={filters.locations.has(location)}
                      onCheckedChange={() => toggleLocationFilter(location)}
                    >
                      {location}
                    </DropdownMenuCheckboxItem>
                  ))}
                </div>
              </div>

              <DropdownMenuSeparator />

              <div className="p-2">
                <Button variant="ghost" size="sm" onClick={resetFilters} className="w-full">
                  Reset Filters
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-3 w-full md:w-auto justify-between md:justify-start">
          <Button
            variant="outline"
            onClick={() => {
              toggleSortOrder()
              setSortDirection("desc")
            }}
            className="flex items-center gap-2"
          >
            Sort by: {sortOrder === "score" ? "Match Score" : "Name"}
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleSortDirection} className="h-10 w-10">
            <ArrowUpDown className={`h-4 w-4 transition-all ${sortDirection === "asc" ? "rotate-180" : ""}`} />
          </Button>

          <div className="hidden sm:block">
            <Tabs defaultValue="table" onValueChange={(value) => setViewMode(value)}>
              <TabsList>
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="grid">Grid</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredCandidates.length} of {candidates.length} candidates
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-muted/40 rounded-lg p-6 h-48 animate-pulse" />
          ))}
        </div>
      ) : (
        <>
          {/* Table View */}
          {viewMode === "table" && (
            <div className="overflow-x-auto rounded-lg border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-sm w-12">#</th>
                    <th className="px-4 py-3 text-left font-medium text-sm">Candidate</th>
                    <th className="px-4 py-3 text-left font-medium text-sm">Match Score</th>
                    <th className="px-4 py-3 text-left font-medium text-sm">Skills</th>
                    <th className="px-4 py-3 text-left font-medium text-sm">Location</th>
                    <th className="px-4 py-3 text-left font-medium text-sm">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filteredCandidates.map((candidate, index) => (
                      <motion.tr
                        key={candidate.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`border-t hover:bg-muted/30 relative ${index < 3 ? "bg-muted/10" : ""}`}
                      >
                        <td className="px-4 py-4 text-center font-medium">
                          {index < 3 ? (
                            <div className="relative flex items-center justify-center">
                              <div
                                className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                                ${
                                  index === 0
                                    ? "bg-gradient-to-br from-yellow-300 to-yellow-600"
                                    : index === 1
                                      ? "bg-gradient-to-br from-gray-300 to-gray-500"
                                      : "bg-gradient-to-br from-amber-600 to-amber-800"
                                }
                              `}
                              >
                                {index + 1}
                              </div>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">{index + 1}</span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border">
                              <AvatarImage src={candidate.profileImage} alt={candidate.name} />
                              <AvatarFallback>{getInitials(candidate.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{candidate.name}</div>
                              <div className="text-sm text-muted-foreground">{candidate.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`
                              w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm
                              ${getScoreColor(candidate.matchScore)}
                              ${index < 3 ? "ring-2 ring-background shadow-lg" : ""}
                            `}
                            >
                              {candidate.matchScore}%
                            </div>
                            {index === 0 && (
                              <div className="hidden sm:block">
                                <Star className="h-5 w-5 text-yellow-500 ml-1 animate-pulse" />
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {candidate.skills.slice(0, 3).map((skill, i) => (
                              <Badge key={i} variant="secondary" className="font-normal">
                                {skill}
                              </Badge>
                            ))}
                            {candidate.skills.length > 3 && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Badge variant="outline" className="font-normal cursor-help">
                                      +{candidate.skills.length - 3}
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <div className="flex flex-col gap-1">
                                      {candidate.skills.slice(3).map((skill, i) => (
                                        <div key={i}>{skill}</div>
                                      ))}
                                    </div>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            {candidate.location}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1 text-sm">
                            <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                            {candidate.experience} years
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredCandidates.map((candidate, index) => (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`
                      relative rounded-lg border bg-card p-6 shadow-sm
                      ${index < 3 ? "ring-1 ring-primary/10" : ""}
                      ${index === 0 ? "bg-gradient-to-b from-primary/5 to-transparent" : ""}
                      hover:shadow-md transition-shadow
                    `}
                  >
                    {index < 3 && <RankMedal rank={index + 1} />}

                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 border">
                          <AvatarImage src={candidate.profileImage} alt={candidate.name} />
                          <AvatarFallback>{getInitials(candidate.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-lg">{candidate.name}</div>
                          <div className="text-sm text-muted-foreground">{candidate.role}</div>
                        </div>
                      </div>

                      <div
                        className={`
                        min-w-[3rem] h-12 rounded-full flex items-center justify-center text-white font-bold
                        ${getScoreColor(candidate.matchScore)}
                        ${index < 3 ? "ring-2 ring-background shadow-lg" : ""}
                      `}
                      >
                        {candidate.matchScore}%
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium mb-1">Key Skills</div>
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                          {candidate.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                          {candidate.experience} years
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center border-t text-sm">
                        <div className="text-muted-foreground">Last active: {candidate.lastActive}</div>
                        <Button variant="ghost" size="sm" className="h-8">
                          View Profile
                        </Button>
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="absolute top-0 right-0 -mt-2 -mr-2">
                        <div className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1 font-medium flex items-center gap-1 shadow-lg">
                          <Star className="h-3 w-3 fill-current" />
                          Top Match
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Empty state */}
          {filteredCandidates.length === 0 && (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No candidates found</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Try adjusting your search or filter criteria to find more candidates.
              </p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

