import { NextRequest, NextResponse } from 'next/server'
import sharp, { FormatEnum } from "sharp"
import { headers } from "next/headers"
import archiver from 'archiver'
import { type ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers'

const getMimeType = (reqHeaders: ReadonlyHeaders) => {
  const convertFrom = reqHeaders.get('convertfrom')
  if (!(typeof convertFrom === 'string')) {
    return undefined
  }
  return convertFrom.split('/')[0]
}

export const POST = async (request: NextRequest) => {
  const reqHeaders = headers()
  const reqBlob = await request.blob()
  // const reqarrayBuffer = await request.arrayBuffer()
  // const reqFormData = await request.formData()
  if (!reqBlob) return NextResponse.json({
    status: 400,
    message: "No Images provided",
  })

  const mimetype = getMimeType(reqHeaders)
  if (mimetype === 'image') {

  }


  // console.log('****************', (reqHeaders.get('convertfrom')))

  // console.log('blobbb', reqBlob)
  // console.log('reqarrayBufferrrrrrrrr', reqarrayBuffer)
  // console.log('reqformDataaaaa', reqFormData)
  // console.log('reqreqHeadersssssss', reqHeaders)

  // return await NextResponse.json({
  //   reqBlob,
  //   // reqarrayBuffer,
  //   // reqFormData,
  //   reqHeaders
  // })
  return NextResponse.json(reqHeaders)
}