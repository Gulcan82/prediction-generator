variable "function_name" {
  description = "Name of the Lambda function."
  type        = string
}

variable "lambda_role_arn" {
  description = "IAM Role ARN for the Lambda function."
  type        = string
}

variable "handler" {
  description = "Handler function (e.g., index.handler) for the Lambda function."
  type        = string
}

variable "runtime" {
  description = "Runtime for the Lambda function (e.g., nodejs14.x, python3.9)."
  type        = string
}

variable "lambda_environment_vars" {
  description = "Environment variables for the Lambda function."
  type        = map(string)
  default     = {}
}

variable "lambda_zip_path" {
  description = "The path to the Lambda ZIP file."
  type        = string
}

