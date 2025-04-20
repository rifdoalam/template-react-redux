interface ExampleType  {
    id: number
    name: string
    description: string
    createdAt: string
    updatedAt: string
    isActive: boolean
    isDeleted: boolean

}
// Define the initial state using that type

interface DataState {
    data: ExampleType[]
}

export type { ExampleType, DataState }