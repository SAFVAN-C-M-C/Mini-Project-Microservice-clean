import { AdminData } from "../../../domain/entities/AdminData";
import { AdminEntity } from "../../../domain/entities/AdminEntity";
import { hashPassword } from "../../../util/bcrypt/hashPassword";
import { Admin } from "../models/admin";

export const addAdmin = async (data: AdminData):Promise<AdminEntity | null> => {
  if (!data.email || !data.password || !data.username) {
    throw new Error("Username, Email, and Password are required");
  }

  if (data.username.trim() === "") {
    throw new Error("Username cannot be empty");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format");
  }
  if (data.password.length < 6) {
    throw new Error("Password must be at least 8 characters long");
  }
  const existingUser:AdminEntity|null=await Admin.findOne({email:data?.email,isAdmin:true,role:"admin"});
  if(existingUser){
    throw new Error("admin already exist")
  }

  const hashedPassword=await hashPassword(data?.password);
  const newAdmin=new Admin({
    email:data?.email,
    password:hashedPassword,
    username:data?.username
  })
  const savedAdmin=await newAdmin.save()
  return savedAdmin;
};
