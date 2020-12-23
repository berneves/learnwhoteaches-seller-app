export interface SimulationResponse {
  country: string
  items: SimulationItem[]
  logisticsInfo: LogisticsInfo[]
  postalCode?: string
}

export interface SimulationItem {
  attachmentOfferings?: AttachmentOffering[]
  id: string
  listPrice?: number
  measurementUnit: string
  merchantName: string | null
  offerings?: Offering[]
  price: number
  priceTags: any[]
  priceValidUntil: null
  quantity: number
  requestIndex: number
  seller: string
  unitMultiplier: number
}

interface AttachmentOffering {
  name: string
  required: boolean
  schema: Schema
}

interface Schema {
  Name: Name
  Number: Name
}

interface Name {
  maximumNumberOfCharacters: number
  domain: any[]
}

interface Offering {
  type: string
  id: string
  name: string
  price: number
}

interface LogisticsInfo {
  itemIndex: number
  quantity: number
  shipsTo: string[]
  slas: Sla[] | []
  stockBalance: number
  deliveryChannels: DeliveryChannel[]
}

interface DeliveryChannel {
  id: string
  stockBalance: number
}

interface Sla {
  id: string
  deliveryChannel: string
  name: string
  price: number
  shippingEstimate: string
  availableDeliveryWindows?: AvailableDeliveryWindow[]
  pickupStoreInfo?: PickupStoreInfo
}

interface AvailableDeliveryWindow {
  startDateUtc: string
  endDateUtc: string
  price: number
}

interface PickupStoreInfo {
  isPickupStore: boolean
  friendlyName: string
  address: Address
  additionalInfo: string
}

interface Address {
  addressType: string
  receiverName: null
  addressId: string
  postalCode: string
  city: string
  state: string
  country: string
  street: string
  number: string
  neighborhood: string
  complement: string
  reference: null
  geoCoordinates: number[]
}

export interface SimulationInput {
  postalCode: string
  geoCoordinates: string[]
  country: string
  items: CartItem[]
}

interface CartItem {
  id: string
  seller: string
  sku: string
  ean: string
  refId: string | null
  unitMultiplier: number
  measurementUnit: string
  targetPrice: number
  itemPrice: number
  quantity: number
  discountPrice: number | null
  dockId: string
  freightPrice: number
  brandId: string
}