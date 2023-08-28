<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $contact = Contact::search($request->search)->paginate(11);
        } else {
            $contact = Contact::orderBy('id', 'DESC')->paginate(11);
        }
        return view('admin.contact.index', compact('contact'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'mail' => 'required|string|max:255',
            'details' => 'required'
        ]);

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->mail = $request->mail;
        $contact->details = $request->details;
        $contact->save();

        return redirect()->route('contact')->with('success', 'Contact created successfully!');
    }



    public function edit($id)
    {
        $contact = Contact::where('id', $id)->get();
        return view('admin.contact.edit', compact('contact'));
    }

    public function update(Request $request, $id)
    {

        $contact = Contact::findOrFail($id);

        $contact->status = $request->status;
        $contact->save();

        return redirect()->route('admin.contact.index')->with('success', 'Contact updated successfully!');
    }


    public function destroy($id)
    {
        Contact::destroy($id);
        return redirect()->route('admin.contact.index')->with('success', 'Xóa thành công');
    }
}
