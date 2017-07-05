const mockClassTemplate = jest.fn()
const mockFunctionalTemplate = jest.fn()
const mockTestTemplate = jest.fn()
const mockStorybookTemplate = jest.fn()
const mockIndexTemplate = jest.fn()
const mockStyleTemplate = jest.fn()

jest
    .mock('../js/class.template', () => mockClassTemplate)
    .mock('../js/functional.template', () => mockFunctionalTemplate)
    .mock('../js/test.template', () => mockTestTemplate)
    .mock('../js/storybook.template', () => mockStorybookTemplate)
    .mock('../js/index.template', () => mockIndexTemplate)
    .mock('../css/style.template', () => mockStyleTemplate)

const {
    generateComponentTemplate,
    generateStyleFile,
    generateIndexFile,
    generateTestTemplate,
    generateStorybookTemplate,
} = require('../index')

describe('Template index', () => {
  afterEach(() => {
    jest.resetModules()
    jest.resetAllMocks()
  })

  it('should call class.template when class is passed into generateComponentTemplate', () => {
    generateComponentTemplate('class', 'test')
    expect(mockClassTemplate).toHaveBeenCalledWith('test', 'class', {})
  })

  it('should call pure.template when pure is passed into generateComponentTemplate', () => {
    generateComponentTemplate('pure', 'test')
    expect(mockClassTemplate).toHaveBeenCalledWith('test', 'pure', {})
  })

  it('should call functional.template when stateless is passed into generateComponentTemplate', () => {
    generateComponentTemplate('stateless', 'test')
    expect(mockFunctionalTemplate).toHaveBeenCalledWith('test', 'stateless', {})
  })

  it('should export generateIndexFile with correct module', () => {
    generateIndexFile()
    expect(mockIndexTemplate).toHaveBeenCalled()
  })

  it('should export generateTestTemplate with correct module', () => {
    generateTestTemplate()
    expect(mockTestTemplate).toHaveBeenCalled()
  })

  it('should export generateStorybookTemplate with correct module', () => {
    generateStorybookTemplate()
    expect(mockStorybookTemplate).toHaveBeenCalled()
  })

  it('should export generateStyleFile with correct module', () => {
    generateStyleFile()
    expect(mockStyleTemplate).toHaveBeenCalled()
  })
})
