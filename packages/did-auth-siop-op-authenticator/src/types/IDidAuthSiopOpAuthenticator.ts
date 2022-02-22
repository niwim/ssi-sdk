import { DIDDocumentSection, IAgentContext, IIdentifier, IPluginMethodMap, IResolver, IKeyManager } from '@veramo/core'
import { IVerifiableCredential, IVerifiablePresentation } from '@sphereon/pex'
import { OpSession } from '../session/OpSession'
import { SIOP } from '@sphereon/did-auth-siop'

export interface IDidAuthSiopOpAuthenticator extends IPluginMethodMap {
  getSessionForSiop(args: IGetSiopSessionArgs, context: IRequiredContext): Promise<OpSession>
  registerSessionForSiop(args: IRegisterSiopSessionArgs, context: IRequiredContext): Promise<OpSession>
  removeSessionForSiop(args: IRemoveSiopSessionArgs, context: IRequiredContext): Promise<boolean>
  authenticateWithSiop(args: IAuthenticateWithSiopArgs, context: IRequiredContext): Promise<IResponse>
  getSiopAuthenticationRequestFromRP(
    args: IGetSiopAuthenticationRequestFromRpArgs,
    context: IRequiredContext
  ): Promise<SIOP.ParsedAuthenticationRequestURI>
  getSiopAuthenticationRequestDetails(args: IGetSiopAuthenticationRequestDetailsArgs, context: IRequiredContext): Promise<IAuthRequestDetails>
  verifySiopAuthenticationRequestURI(
    args: IVerifySiopAuthenticationRequestUriArgs,
    context: IRequiredContext
  ): Promise<SIOP.VerifiedAuthenticationRequestWithJWT>
  sendSiopAuthenticationResponse(args: ISendSiopAuthenticationResponseArgs, context: IRequiredContext): Promise<IResponse>
  registerCustomApprovalForSiop(args: IRegisterCustomApprovalForSiopArgs, context: IRequiredContext): Promise<void>
  removeCustomApprovalForSiop(args: IRemoveCustomApprovalForSiopArgs, context: IRequiredContext): Promise<boolean>
}

export interface IOpSessionArgs {
  sessionId: string
  identifier: IIdentifier
  context: IRequiredContext
  expiresIn?: number
  verificationMethodSection?: DIDDocumentSection
}

export interface IAuthenticateWithSiopArgs {
  sessionId: string
  stateId: string
  redirectUrl: string
  customApproval?: ((verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT) => Promise<void>) | string
}

export interface IGetSiopAuthenticationRequestFromRpArgs {
  sessionId: string
  stateId: string
  redirectUrl: string
}

export interface IGetSiopAuthenticationRequestDetailsArgs {
  sessionId: string
  verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT
  verifiableCredentials: IVerifiableCredential[]
}

export interface IVerifySiopAuthenticationRequestUriArgs {
  sessionId: string
  requestURI: SIOP.ParsedAuthenticationRequestURI
}

export interface ISendSiopAuthenticationResponseArgs {
  sessionId: string
  verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT
  verifiablePresentationResponse?: SIOP.VerifiablePresentationResponseOpts[]
}

export interface IAuthRequestDetails {
  id: string
  vpResponseOpts: SIOP.VerifiablePresentationResponseOpts[]
  alsoKnownAs?: string[]
}

export interface IResponse extends Response {}

export interface IMatchedPresentationDefinition {
  location: SIOP.PresentationLocation
  format: SIOP.VerifiablePresentationTypeFormat
  presentation: IVerifiablePresentation
}

export interface IGetSiopSessionArgs {
  sessionId: string
}

export interface IRegisterSiopSessionArgs {
  identifier: IIdentifier
  sessionId?: string
  expiresIn?: number
}

export interface IRemoveSiopSessionArgs {
  sessionId: string
}

export interface IRegisterCustomApprovalForSiopArgs {
  key: string
  customApproval: (verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT) => Promise<void>
}

export interface IRemoveCustomApprovalForSiopArgs {
  key: string
}

export interface IOpsAuthenticateWithSiopArgs {
  stateId: string
  redirectUrl: string
  customApprovals: Record<string, (verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT) => Promise<void>>
  customApproval?: ((verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT) => Promise<void>) | string
  siopRequestDetails?: IOpsGetSiopAuthenticationRequestDetailsArgs
}

export interface IOpsGetSiopAuthenticationRequestFromRpArgs {
  stateId: string
  redirectUrl: string
}

export interface IOpsGetSiopAuthenticationRequestDetailsArgs {
  verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT
  verifiableCredentials: IVerifiableCredential[]
}

export interface IOpsVerifySiopAuthenticationRequestUriArgs {
  requestURI: SIOP.ParsedAuthenticationRequestURI
}

export interface IOpsSendSiopAuthenticationResponseArgs {
  verifiedAuthenticationRequest: SIOP.VerifiedAuthenticationRequestWithJWT
  verifiablePresentationResponse?: SIOP.VerifiablePresentationResponseOpts[]
}

export enum events {
  DID_SIOP_AUTHENTICATED = 'didSiopAuthenticated',
  DID_SIOP_AUTHENTICATION_FAILED = 'didSiopAuthenticationFailed',
}

export type IRequiredContext = IAgentContext<IResolver & IKeyManager>
