export interface OfferI {
  EventOfferId: number;
  EventOffer: string;
  Locality: 1 | 2 | null;
  Status: string;
  OfferProviderCode: string;
  TicketQuote: number;
  WebQuote: string;
}

export interface MarketI {
  EventId: number;
  ViewOrder: number;
  ModalityGroupId: number;
  Main: string;
  Modality: string;
  Offers: OfferI[];
}
